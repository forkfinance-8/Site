// FORK CAPITAL — shared behaviour
// Intentionally small: sticky header state, mobile nav, FAQ accordion,
// active nav link, footer year. No decorative scroll-triggered animation —
// see /css/style.css for the single hero load-in sequence instead.

(function () {
  'use strict';

  // Sticky header contrast on scroll
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('#mainNav a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active nav link for current page
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#mainNav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // FAQ accordion (independent toggles)
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      item.classList.toggle('is-open');
    });
  });

  // Footer year
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
