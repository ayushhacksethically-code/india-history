# INDIA — The History of India

[![Status: In Development](https://img.shields.io/badge/Status-In%20Development-orange.svg)](https://github.com/ayushhacksethically-code/india-history)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](LICENSE)

🌐 **Live Site**: [https://ayushhacksethically-code.github.io/india-history/](https://ayushhacksethically-code.github.io/india-history/)

📖 **Contributing**: Please review [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on error reporting, source citation, and academic standards.

📜 **Changelog**: Detailed release notes and architectural roadmap are tracked in [CHANGELOG.md](CHANGELOG.md).

---

A visually stunning, production-ready, multi-page educational static website taking visitors chronologically through nine millennia of subcontinental settled life and many parallel civilizations.

Designed with an editorial museum aesthetic: deep indigo backgrounds, warm gold accents, rich saffron flourishes, and hand-authored inline SVGs including the 24-spoke Ashoka Chakra.

---

## Central Editorial Thesis

> **"India was never one civilization. At every period — including the Bronze Age — multiple urban, agrarian, pastoral and tribal civilizations existed side by side. This plurality, not uniformity, is India's oldest and most continuous feature."**

Every page on this site teaches this principle directly: while the Indus Valley Civilization was the sole *urban* civilization of its age (with planned street grids, municipal drainage, seals, standardized metrology, and writing), vibrant contemporary Neolithic, Chalcolithic, and Megalithic cultures flourished simultaneously across Kashmir, the Ganga Plains, Rajasthan, Central India, Maharashtra, and the Deccan.

### Editorial Thesis — Extended: Antiquity vs. Continuity

1. **Antiquity vs. Continuity**:
   - **Antiquity** measures how far back the archaeological record reaches in dirt and stone. Settled farming emerged across West Asia, India (Mehrgarh, Lahuradewa), and China (Jiahu) at roughly the same horizon (c. 9000–7000 BCE). No single nation holds a monopoly on antiquity.
   - **Continuity** measures whether that record connects unbroken to the living culture of today. While Sumerian cuneiform and Egyptian hieroglyphs died millennia ago and exist strictly as museum specimens, Indian and Chinese scripts, languages, foundational texts, rituals, and festivals still breathe in daily life.
   - *Continuity is the far stronger, authentic civilizational claim.*

2. **Two Living Civilizations (India and China)**:
   - India and China are the world's two surviving continuous civilizations.
   - Both survived because of their **multi-stream architecture**: internal diversity, geographic redundancy, decentralized village governance, and autonomous oral/textual memory act as shock absorbers against foreign conquests and natural catastrophes.
   - India and China are not rivals in antiquity — they are partners in civilizational resilience.

---

## Quick Start (How to Run)

**Zero build tools, zero dependencies, zero npm packages.**

Simply open `index.html` (or any other `.html` file) directly in any modern web browser:
- Double click `index.html` in your graphical file manager, or
- Run `xdg-open "index.html"` in Linux, or
- Drag and drop `index.html` into Google Chrome, Firefox, Safari, or Microsoft Edge.

The website is 100% `file://` safe (no web server, node, or bundler required).

---

## Navigation Mapping

All 11 navigation pages are reachable from the shared desktop header, mobile drawer, and footer quick links — 7 in the primary nav, 4 in the 'More' dropdown:

1. **Home** (`index.html`)
2. **Origins** (`origins.html`)
3. **Antiquity** (`antiquity.html`)
4. **Timeline** (`timeline.html`)
5. **Civilizations** (`civilizations.html`)
6. **Living Civilizations** (`living-civilizations.html`)
7. **Dynasties** (`dynasties.html`)
8. **Colonial India** (`colonial-india.html`)
9. **Freedom Struggle** (`freedom-struggle.html`)
10. **Republic** (`republic.html`)
11. **References** (`references.html`)

---

## Complete Multi-Page File Structure

```
/home/narayanas/INDIA: The History of India/
├── index.html                   # Page 1: Home (100vh hero, spinning chakra, thesis pull quote, 8-card explore grid, 4-line digest)
├── origins.html                 # Page 2: Origins (Pre-history, village roots: Mehrgarh/Bhirrana/Kunal, IVC urban exception, Harappan Seals, 8 contemporary cultures)
├── antiquity.html               # Page 3: Antiquity (How Old Is Indian Civilization? Antiquity vs. continuity, timeline of firsts, verified claims)
├── timeline.html                # Page 4: Interactive Timeline (15 epochs, central spine + parallel thread, quick reference table)
├── civilizations.html           # Page 5: Civilizations (Thesis page: Two-track parallel diagram, 3 definition cards, braided river SVG, comparative callout)
├── living-civilizations.html    # Page 6: Living Civilizations (India & China comparison table, single-stream vs. multi-stream mechanism diagram)
├── dynasties.html               # Page 7: Dynasties (Hub & directory of 83 rulers across 5 eras, interactive filter chips, aria-live status)
├── colonial-india.html          # Page 8: Colonial India (1757 to 1947 context hub, mechanisms of rule, drain of wealth, social impacts)
├── freedom-struggle.html        # Page 9: Freedom Struggle (Plural resistance movements, visible resistance, parallel emancipations, Partition costs)
├── republic.html                # Page 10: The Republic (1950 to present, Constitution, Dr. B. R. Ambedkar, Emergency, external wars, economic reforms)
├── references.html              # Page 11: Sources & References (Historiographical methodology, 52-term glossary, comparative bibliography)
├── freedom.html                 # Page 12: Freedom (Legacy 8-card scroll strip, plural resistance narrative)
├── 404.html                     # Page 13: 404 Not Found (Standardized error page with site navigation)
├── ashoka.html                  # Page 14: Ashoka Maurya (Ruler profile: edicts, Kalinga aftermath, Dhamma statecraft, 6 Evidence Boxes)
├── akbar.html                   # Page 15: Jalal-ud-din Muhammad Akbar (Ruler profile: Sulh-i-kul, Mansabdari, Ibadat Khana, Chittorgarh)
├── aurangzeb.html               # Page 16: Muhi-ud-din Muhammad Aurangzeb (Ruler profile: Fatawa-e-Alamgiri, Deccan campaigns, jizya, temples)
├── shivaji.html                 # Page 17: Chhatrapati Shivaji Maharaj (Ruler profile: Hindavi Swarajya, Ashtapradhan, naval fleet, fort warfare)
├── css/
│   ├── reset.css                # CSS reset & border-box baseline
│   ├── variables.css            # Color tokens, typography clamps, spacing, transitions
│   ├── layout.css               # Containers, section rhythms, print rules, breadcrumbs
│   ├── components.css           # Header, hero, timeline, cards, filters, tables, two-track, braided river, comparison table, ruler-row
│   └── animations.css           # Keyframes, chakra rotation, scroll reveals, prefers-reduced-motion overrides
├── js/
│   ├── main.js                  # Shared orchestrator (nav, particles, dynasty filters, back to top)
│   ├── nav.js                   # Sticky header, multi-page active link detection, mobile drawer focus trap & Escape key
│   ├── reveal.js                # IntersectionObserver scroll reveal controller
│   └── timeline.js              # rAF-throttled scroll spine fill, parallel thread markers & accordion logic (loaded on timeline.html)
├── assets/
│   ├── favicon.svg              # 24-spoke Ashoka Chakra vector icon
│   ├── chakra.svg               # Precision Ashoka Chakra asset
│   ├── contemporary-cultures.svg # Subcontinental map showing IVC zone + 8 contemporary culture pins + legend
│   └── motifs.svg               # SVG symbol sprite (#motif-lotus, #motif-chakra, #motif-chevron, #motif-pot, #motif-blade, #motif-grain)
└── README.md                    # Project documentation and developer guides
```

---

## Design System & Tokens

Defined in `css/variables.css`:

### Color Palette
- `--saffron`: `#FF9933` (primary accent, active era highlights, urban badges)
- `--deep-saffron`: `#E07B18` (gradients, secondary brand focus)
- `--maroon`: `#6B1F1F` (Freedom Struggle dramatic section band)
- `--indigo`: `#1B2A4A` (primary canvas background)
- `--indigo-2`: `#0F1A2E` (alternating darker section bands and drawer background)
- `--gold`: `#D4AF37` (borders, display subtitles, hairline rules, regional badges)
- `--ivory`: `#F5EFE6` (high-contrast primary body text, contrast > 11:1)
- `--ashoka-blue`: `#0A3A82` (Ashoka Chakra spokes and hub)
- `--muted`: `rgba(245, 239, 230, 0.65)` (supporting descriptions)

### Typography
- **Headings / Display**: `"Cormorant Garamond"`, serif (600 / 700 weights).
- **Body & UI**: `"Inter"`, `"Mukta"`, sans-serif (400 / 500 / 600 weights, line-height 1.7 to 1.85, max measure 68ch).
- **Eyebrow Labels**: Uppercase, `0.18em` letter tracking, 12px, gold.

---

## Shared Chrome Contract

All 17 pages feature a **100% byte-identical `<header>` and `<footer>`** block:
- **Active Page Detection**: Handled cleanly via `<body data-page="[page-name]">` matching `.nav-link[data-page="[page-name]"]` in `css/components.css` and `js/nav.js`.
- **Breadcrumbs**: Every subpage includes a `<nav class="breadcrumb-nav" aria-label="Breadcrumb">` path immediately following the header.
- **Mobile Menu**: Fully accessible drawer with focus trapping, `aria-expanded` toggle, and `Escape` key close.

---

## Extension Guides

### 1. How to Add a New Page
1. Create `new-page.html`.
2. Set `<body data-page="new-page">`.
3. Copy the exact `<header>` and `<footer>` blocks from `index.html`.
4. Add the breadcrumb:
   ```html
   <nav class="breadcrumb-nav" aria-label="Breadcrumb">
     <div class="container">
       <ol class="breadcrumb">
         <li><a href="index.html">Home</a></li>
         <li aria-current="page">New Page Title</li>
       </ol>
     </div>
   </nav>
   ```
5. Add `<link>` tags for `reset.css`, `variables.css`, `layout.css`, `components.css`, and `animations.css`.
6. Add `<script>` tags at the bottom for `nav.js`, `reveal.js`, and `main.js`.

### 2. How to Add an Era to `timeline.html`
Insert the following markup into the `.timeline-container` in `timeline.html`:

```html
<article class="timeline-node reveal" id="era-sample-epoch">
  <div class="timeline-marker" aria-hidden="true"></div>
  <div class="timeline-card">
    <span class="era-date">c. 300 &ndash; 200 BCE</span>
    <h3 class="era-title">Name of the Era</h3>
    <p class="era-desc">
      Concise 2–3 sentence overview of this epoch's political, economic, or cultural significance.
    </p>
    <div class="figure-chips">
      <span class="figure-chip">Key Figure or Culture 1</span>
      <span class="figure-chip">Key Figure or Culture 2</span>
    </div>
    <button class="accordion-btn" aria-expanded="false" aria-controls="panel-sample-epoch">
      <span>Deep Dive</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
    <div id="panel-sample-epoch" class="accordion-content">
      <div class="accordion-inner">
        <p>In-depth archaeological, epigraphical, or social history details for this era.</p>
      </div>
    </div>
  </div>
</article>
```

`js/timeline.js` automatically binds scroll progress, active glow, and accordion animation dynamically.

---

## Editorial Notes & Historiography

### Strict Urban vs. Broad Civilizational Definitions
- **The Strict / Urban Definition**: Requires planned orthogonal cities, monumental public works, formal writing scripts, standardized metrology, and bureaucratic state-level administration. Under this strict archaeological definition, the **Indus Valley Civilization was the sole urban civilization** in the third millennium BCE subcontinent.
- **The Broader Cultural Definition**: Acknowledges settled agriculture, pyrotechnology (ceramics and copper/bronze/iron metallurgy), long-distance resource exchange, distinctive architectural forms, and complex ceremonial traditions. Under this definition, contemporary regional cultures &mdash; from Burzahom in Kashmir to Lahuradewa in the Ganga plain and Hallur in Karnataka &mdash; were authentic civilizations that developed in parallel.

### Debated Chronologies & Cartography
- **Bhirrana (c. 7500–8000 BCE)**: Radiometric C-14 and TL dating from Archaeological Survey of India (ASI) excavations indicating early Hakra ware is presented with scholarly care as an active subject of ongoing verification.
- **Schematic Map**: The subcontinental map in `assets/contemporary-cultures.svg` (and `origins.html`) is an educational diagram visualizing cultural zones and coexistence rather than rigid administrative boundaries.

---

## License & Credits

Dedicated as an open educational tribute to the history of the Indian subcontinent.  
Licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.
