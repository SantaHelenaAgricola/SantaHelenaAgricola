(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.classList.toggle('open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  var rail = document.querySelector('.rail');
  document.querySelectorAll('.rail-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var step = rail.querySelector('li').offsetWidth + 22;
      rail.scrollBy({ left: Number(btn.dataset.dir) * step * 2, behavior: 'smooth' });
    });
  });

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
