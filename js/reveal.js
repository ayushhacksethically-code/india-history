/**
 * reveal.js — IntersectionObserver Scroll Reveals
 * Triggers fade & translateY entrance animations as elements enter the viewport.
 * Automatically respects prefers-reduced-motion.
 */

function initScrollReveals() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    // If user prefers reduced motion or observer is unsupported, reveal instantly
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const viewportHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elHeight = el.offsetHeight;
    // Small elements (<=50% viewport): trigger at 12% visible
    // Tall elements (>50% viewport): trigger on first visible pixel
    const threshold = elHeight > viewportHeight * 0.5 ? 0 : 0.12;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold
    });

    observer.observe(el);
  });
}

window.initScrollReveals = initScrollReveals;
