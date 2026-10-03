/**
 * main.js — Application Orchestration & Interactive Features
 * Initializes particle canvas, dynasty filters, and smooth interactions.
 * Fully compatible with direct file:// opening.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.initNav === 'function') window.initNav();
  if (typeof window.initTimeline === 'function') window.initTimeline();
  if (typeof window.initScrollReveals === 'function') window.initScrollReveals();

  initParticleCanvas();
  initDynastyFilters();
  initBackToTop();
});

/**
 * Procedural ambient dust motes canvas for Hero section.
 * Disabled completely if prefers-reduced-motion is active.
 */
function initParticleCanvas() {
  const canvas = document.querySelector('.hero-canvas');
  if (!canvas) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = canvas.parentElement.clientHeight || window.innerHeight);

  const particleCount = Math.min(45, Math.floor(width / 30));
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.1,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }

  window.addEventListener('resize', resize, { passive: true });

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around edges
      if (p.y < 0) p.y = height;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

/**
 * Dynasties & Figures interactive filter bar with aria-live updates.
 */
function initDynastyFilters() {
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.figure-card');
  const liveStatus = document.getElementById('filter-live-status');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const targetCategory = chip.getAttribute('data-filter');

      // Update active state on chips
      chips.forEach((c) => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');

      let visibleCount = 0;

      cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const matches = targetCategory === 'all' || cardCategory === targetCategory;

        if (matches) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      // Announce count to assistive technology
      if (liveStatus) {
        liveStatus.textContent = `Showing ${visibleCount} historical figures for category ${chip.textContent.trim()}.`;
      }
    });
  });
}

/**
 * Back to top smooth navigation
 */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
