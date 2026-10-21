import subprocess
import time
import urllib.request
import urllib.parse
import json
import asyncio
import os
import glob
import websockets
import base64

CDP_PORT = 9229

async def run_suite():
    chrome_proc = subprocess.Popen([
        "/usr/bin/google-chrome",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--allow-file-access-from-files",
        f"--remote-debugging-port={CDP_PORT}",
        "--remote-allow-origins=*"
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    await asyncio.sleep(1.2)
    
    viewports = [
        ("320px", 320, 800),
        ("375px", 375, 800),
        ("768px", 768, 1024),
        ("1024px", 1024, 768),
        ("1440px", 1440, 900),
        ("1920px", 1920, 1080)
    ]
    
    pages = sorted(glob.glob("*.html"))
    pages = [p for p in pages if not p.startswith("test_")]
    print(f"Total HTML pages to test: {len(pages)}")
    print(f"Total viewports per page: {len(viewports)} (expected 6)")
    print(f"Total test runs: {len(pages) * len(viewports)}")

    passed_count = 0
    failed_count = 0
    failures = []
    
    try:
        ws_url = None
        for _ in range(25):
            try:
                with urllib.request.urlopen(f"http://127.0.0.1:{CDP_PORT}/json/list") as resp:
                    targets = json.loads(resp.read().decode())
                    for t in targets:
                        if t.get("type") == "page":
                            ws_url = t["webSocketDebuggerUrl"]
                            break
                    if ws_url:
                        break
            except Exception:
                pass
            await asyncio.sleep(0.2)

        assert ws_url, "Could not find Chrome page websocket target"

        async with websockets.connect(ws_url, max_size=50*1024*1024) as ws:
            cur_id = 1
            pending = {}
            events = []

            async def call(method, params=None):
                nonlocal cur_id
                cid = cur_id; cur_id += 1
                await ws.send(json.dumps({"id": cid, "method": method, "params": params or {}}))
                while cid not in pending:
                    msg = json.loads(await ws.recv())
                    if "id" in msg: pending[msg["id"]] = msg
                    elif "method" in msg: events.append(msg)
                return pending.pop(cid)

            async def wait_for_load(timeout=6.0):
                start = time.time()
                while time.time() - start < timeout:
                    for i, ev in enumerate(events):
                        if ev.get("method") == "Page.loadEventFired":
                            events.pop(i)
                            return
                    try:
                        msg = json.loads(await asyncio.wait_for(ws.recv(), timeout=0.3))
                        if "id" in msg: pending[msg["id"]] = msg
                        elif "method" in msg:
                            if msg.get("method") == "Page.loadEventFired":
                                return
                            events.append(msg)
                    except asyncio.TimeoutError:
                        pass
                return

            await call("Page.enable")
            await call("DOM.enable")

            for page in pages:
                abs_path = os.path.abspath(page)
                page_url = f"file://{urllib.parse.quote(abs_path)}"
                
                for vp_label, width, height in viewports:
                    # Set viewport
                    await call("Emulation.setDeviceMetricsOverride", {
                        "width": width,
                        "height": height,
                        "deviceScaleFactor": 1,
                        "mobile": False
                    })

                    # Navigate and wait for load
                    await call("Page.navigate", {"url": page_url})
                    await wait_for_load()
                    await asyncio.sleep(0.08)

                    # Stepwise scroll down to fire reveals
                    await call("Runtime.evaluate", {
                        "expression": """
                        (async () => {
                            document.documentElement.style.scrollBehavior = "auto";
                            const max = document.body.scrollHeight;
                            const step = 500;
                            for (let y = 0; y <= max; y += step) {
                                window.scrollTo(0, y);
                                await new Promise(r => setTimeout(r, 10));
                            }
                            await new Promise(r => setTimeout(r, 80));
                        })()
                        """,
                        "awaitPromise": True
                    })

                    # Evaluate overflow and reveals
                    eval_res = await call("Runtime.evaluate", {
                        "expression": """
                        (() => {
                            const docEl = document.documentElement;
                            const body = document.body;
                            const innerWidth = window.innerWidth;
                            const docScrollWidth = docEl.scrollWidth;
                            const bodyScrollWidth = body.scrollWidth;
                            const hasOverflow = (docScrollWidth > innerWidth + 1) || (bodyScrollWidth > innerWidth + 1);
                            
                            const reveals = document.querySelectorAll('.reveal');
                            const revealed = document.querySelectorAll('.reveal.is-revealed');
                            
                            return {
                                innerWidth,
                                docScrollWidth,
                                bodyScrollWidth,
                                hasOverflow,
                                totalReveals: reveals.length,
                                revealedCount: revealed.length
                            };
                        })()
                        """,
                        "returnByValue": True
                    })

                    val = eval_res.get("result", {}).get("result", {}).get("value", {})
                    has_overflow = val.get("hasOverflow", False)
                    total_reveals = val.get("totalReveals", 0)
                    revealed_count = val.get("revealedCount", 0)

                    reveals_ok = (total_reveals == 0) or (revealed_count > 0)

                    if not has_overflow and reveals_ok:
                        passed_count += 1
                    else:
                        failed_count += 1
                        failures.append((page, vp_label, val))

                    # Capture screenshots for the target cleanup/build pages
                    target_pages = ["astronomy.html", "dynasties.html", "science.html", "colonial-india.html", "freedom-struggle.html"]
                    if page in target_pages and width in [1440, 375]:
                        # Scroll to the relevant cards section for the screenshot
                        await call("Runtime.evaluate", {
                            "expression": """
                            (() => {
                                if (window.location.href.includes('astronomy')) {
                                    const el = document.querySelector('.quick-facts-panel') || document.querySelector('.ruler-hero');
                                    if (el) el.scrollIntoView();
                                } else if (window.location.href.includes('dynasties')) {
                                    const el = document.querySelector('.section-header') || document.querySelector('.ruler-row');
                                    if (el) el.scrollIntoView();
                                } else if (window.location.href.includes('science')) {
                                    const el = document.querySelector('#chaptersHeading') || document.querySelector('.content-list');
                                    if (el) el.scrollIntoView();
                                } else if (window.location.href.includes('colonial-india')) {
                                    const el = document.querySelector('.hub-card-grid');
                                    if (el) el.scrollIntoView();
                                } else if (window.location.href.includes('freedom-struggle')) {
                                    const el = document.querySelector('.hub-card-grid');
                                    if (el) el.scrollIntoView();
                                }
                            })()
                            """
                        })
                        await asyncio.sleep(0.1)

                        shot = await call("Page.captureScreenshot", {
                            "format": "png",
                            "clip": {
                                "x": 0,
                                "y": 0,
                                "width": width,
                                "height": 900 if width == 1440 else 800,
                                "scale": 1
                            }
                        })
                        img_data = shot.get("result", {}).get("data", "")
                        if img_data:
                            name = f"screenshot-{page.replace('.html', '')}-{width}.png"
                            with open(name, "wb") as f_img:
                                f_img.write(base64.b64decode(img_data))
                            print(f"Captured screenshot: {name}")

    finally:
        chrome_proc.terminate()

    print(f"\n==========================================")
    print(f"CDP TEST SUMMARY:")
    print(f"Passed: {passed_count}/{len(pages) * len(viewports)} viewports")
    print(f"Failed: {failed_count}")
    if failures:
        print("Failures:")
        for page, vp, v in failures:
            print(f"  {page} at {vp}: {v}")
    print(f"==========================================")
    return passed_count == len(pages) * len(viewports)

if __name__ == "__main__":
    success = asyncio.run(run_suite())
    exit(0 if success else 1)
