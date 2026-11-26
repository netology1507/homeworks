(function () {
  const items = document.querySelectorAll('.reveal');

  function checkReveal() {
    const vh = window.innerHeight;

    items.forEach(el => {
      if (el.classList.contains('reveal_active')) return;

      const rect = el.getBoundingClientRect();

      // Элемент считается видимым, когда его верх поднялся выше нижней
      // границы окна (с запасом 60px — чтобы появление начиналось чуть раньше),
      // а низ ещё не ушёл за верхнюю границу.
      if (rect.top < vh - 60 && rect.bottom > 0) {
        el.classList.add('reveal_active');
      }
    });
  }

  window.addEventListener('scroll', checkReveal, { passive: true });

  // На случай, если блок уже в поле зрения при загрузке страницы
  checkReveal();
})();