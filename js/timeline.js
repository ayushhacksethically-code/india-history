/**
 * timeline.js — Interactive Chronological Progression & Accordion Expansion
 * Only loaded on timeline.html.
 * Drives spine fill and illuminates active era nodes when in viewport.
 */

function initTimeline() {
  const progressLine = document.querySelector('.timeline-progress');
  const container = document.querySelector('.timeline-container');
  const nodes = document.querySelectorAll('.timeline-node');
  const accordionButtons = document.querySelectorAll('.accordion-btn');

  // Accordion Deep Dive Interaction
  accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);

      if (!panel) return;

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }

      // Re-evaluate spine progression after accordion transition finishes
      setTimeout(updateSpineAndNodes, 360);
    });
  });

  if (!container || !progressLine) return;

  let isTicking = false;

  function updateSpineAndNodes() {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const viewportCenter = windowHeight / 2;

    const containerTop = rect.top;
    const containerHeight = rect.height;

    const scrollDistance = viewportCenter - containerTop;
    let progressRatio = scrollDistance / containerHeight;
    progressRatio = Math.max(0, Math.min(1, progressRatio));
    progressLine.style.height = `${(progressRatio * 100).toFixed(2)}%`;

    nodes.forEach((node) => {
      const nodeRect = node.getBoundingClientRect();
      const nodeCenter = nodeRect.top + nodeRect.height * 0.4;

      if (nodeCenter <= viewportCenter + 120 && nodeRect.bottom >= 100) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    isTicking = false;
  }

  function onScroll() {
    if (!isTicking) {
      window.requestAnimationFrame(updateSpineAndNodes);
      isTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    document.querySelectorAll('.accordion-btn[aria-expanded="true"]').forEach((b) => {
      const p = document.getElementById(b.getAttribute('aria-controls'));
      if (p) p.style.maxHeight = `${p.scrollHeight}px`;
    });
    onScroll();
  }, { passive: true });

  updateSpineAndNodes();
}

window.initTimeline = initTimeline;
