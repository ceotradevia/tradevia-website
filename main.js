// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('mobile-open');
    });
  }

  // FAQ accordion (Contact page)
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Insights filter buttons (visual only — filters by category)
  var filterButtons = document.querySelectorAll('.insight-filters button');
  var cards = document.querySelectorAll('.insight-card');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.textContent.trim();
      cards.forEach(function (card) {
        var cardCat = card.querySelector('.insight-cat');
        if (cat === 'All' || (cardCat && cardCat.textContent.trim() === cat)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
