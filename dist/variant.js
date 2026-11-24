// Quiet instrument: slow crossfade on the plinth, ledger preview, the TPS calculator,
// and a light entrance for each section's parts. Everything has a still fallback.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var fadeTimer = null;

  function crossfade() {
    clearInterval(fadeTimer);
    var imgs = document.querySelectorAll('.qi-object img');
    if (imgs.length < 2 || reduce.matches) return;
    var i = 0;
    fadeTimer = setInterval(function () {
      if (document.hidden || !document.contains(imgs[0])) return;
      imgs[i].classList.remove('on');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('on');
    }, 5600);
  }

  function ledger() {
    var list = document.querySelector('.qi-ledger');
    var fig = document.querySelector('.qi-preview');
    if (!list || !fig) return;
    var img = fig.querySelector('img');
    function show(a) {
      img.src = a.dataset.img;
      fig.style.top = (a.getBoundingClientRect().top - list.getBoundingClientRect().top + list.offsetTop) + 'px';
      fig.classList.add('on');
    }
    list.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('mouseenter', function () { show(a); });
      a.addEventListener('focus', function () { show(a); });
      a.addEventListener('mouseleave', function () { fig.classList.remove('on'); });
      a.addEventListener('blur', function () { fig.classList.remove('on'); });
    });
  }

  // Measured in the CGV load test: about 0.6 vCPU per 1,000 TPS.
  function calc() {
    var input = document.getElementById('qi-tps');
    var out = document.getElementById('qi-vcpu');
    if (!input || !out) return;
    function update() {
      var tps = Math.max(0, Number(input.value) || 0);
      out.textContent = '약 ' + (tps / 1000 * 0.6).toFixed(1) + ' vCPU';
    }
    input.addEventListener('input', update);
    update();
  }

  var io = 'IntersectionObserver' in window && !reduce.matches ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  function entrance() {
    if (!io) return;
    var groups = new Map();
    document.querySelectorAll('.qi-work h2, .qi-ledger li, .qi-demo, .qi-bio, .qi-facts, .qi-record, .qi-contact > *, .case-section, .entry, .credential-list > div').forEach(function (el) {
      if (el.classList.contains('rv')) return;
      var n = groups.get(el.parentElement) || 0; groups.set(el.parentElement, n + 1);
      el.style.setProperty('--i', Math.min(n, 5));
      el.classList.add('rv'); io.observe(el);
    });
  }

  window.qiMount = function () { crossfade(); ledger(); calc(); entrance(); };
  new MutationObserver(function () { window.qiMount(); }).observe(document.querySelector('main'), { childList: true });
  window.qiMount();
})();
