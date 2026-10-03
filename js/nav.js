/**
 * nav.js — Multi-page Navigation, Active Highlight, Dropdown, and Mobile Drawer Focus Trap
 */

function initNav() {
  const header = document.querySelector('.site-header');
  if (!header || header.dataset.navInitialized) return;
  header.dataset.navInitialized = 'true';

  const toggleBtn = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .nav-dropdown-item');
  const focusableSelector = 'a[href], button:not([disabled])';

  // Dropdown elements
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownBtn = document.querySelector('.nav-dropdown-btn');
  const dropdownMenu = document.querySelector('.nav-dropdown-menu');
  const dropdownItems = dropdownMenu ? Array.from(dropdownMenu.querySelectorAll('.nav-dropdown-item')) : [];

  // Highlight active page link from body data-page
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    navLinks.forEach((link) => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // --- Dropdown Menu Functionality ---
  function openDropdown() {
    if (!dropdown || !dropdownBtn) return;
    dropdown.classList.add('open');
    dropdownBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown(focusButton = false) {
    if (!dropdown || !dropdownBtn) return;
    dropdown.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', 'false');
    if (focusButton) {
      dropdownBtn.focus();
    }
  }

  if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    dropdownBtn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDropdown();
        if (dropdownItems.length > 0) {
          dropdownItems[0].focus();
        }
      } else if (e.key === 'Escape') {
        closeDropdown();
      }
    });
  }

  if (dropdownMenu) {
    dropdownItems.forEach((item, index) => {
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeDropdown(true);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIndex = (index + 1) % dropdownItems.length;
          dropdownItems[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIndex = (index - 1 + dropdownItems.length) % dropdownItems.length;
          dropdownItems[prevIndex].focus();
        } else if (e.key === 'Tab') {
          // Allow tab to proceed naturally out of dropdown, but close it
          closeDropdown();
        }
      });
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (dropdown && dropdown.classList.contains('open')) {
      if (!dropdown.contains(e.target)) {
        closeDropdown();
      }
    }
  });

  // --- Mobile Navigation Drawer Functionality ---
  function openMobileNav() {
    if (!mobileOverlay || !toggleBtn) return;
    mobileOverlay.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the close button or first focusable element inside the drawer
    const focusable = mobileOverlay.querySelectorAll(focusableSelector);
    if (focusable.length > 0) {
      focusable[0].focus();
    }
  }

  function closeMobileNav() {
    if (!mobileOverlay || !toggleBtn) return;
    mobileOverlay.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileOverlay.classList.contains('open');
      if (isOpen) closeMobileNav();
      else openMobileNav();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileNav);
  }

  // Close drawer when clicking any link inside it
  const mobileLinks = mobileOverlay ? mobileOverlay.querySelectorAll('a') : [];
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileOverlay && mobileOverlay.classList.contains('open')) {
        closeMobileNav();
      }
    });
  });

  // Keyboard navigation: Escape key closes menu, Tab traps focus
  document.addEventListener('keydown', (e) => {
    if (!mobileOverlay || !mobileOverlay.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeMobileNav();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = Array.from(mobileOverlay.querySelectorAll(focusableSelector));
      if (focusable.length === 0) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });

  // Header background elevation on scroll
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

window.initNav = initNav;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}
