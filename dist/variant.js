// Quiet scroll entry: fade and rise once as blocks enter the viewport.
// Skipped entirely when the visitor prefers reduced motion.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var SELECTOR = '.card, .case-section, .case-panel, .entry, .credential-list > div, .about-columns h2';
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  function mark() {
    var groups = new Map();
    document.querySelectorAll(SELECTOR).forEach(function (el) {
      if (el.classList.contains('rv')) return;
      var n = groups.get(el.parentElement) || 0;
      groups.set(el.parentElement, n + 1);
      el.style.setProperty('--i', Math.min(n, 5));
      el.classList.add('rv');
      io.observe(el);
    });
  }
  var main = document.querySelector('main');
  new MutationObserver(mark).observe(main, { childList: true });
  mark();
})();
