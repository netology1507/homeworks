// task.js

document.addEventListener('DOMContentLoaded', () => {
  // Находим все ротаторы на странице — их может быть несколько
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach((rotator) => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    if (cases.length === 0) return;

    let index = cases.findIndex((el) => el.classList.contains('rotator__case_active'));
    if (index === -1) index = 0;

    // Активируем первый элемент явно: класс + цвет из data-атрибутов
    applyCase(cases[index]);

    // Скорость первого слайда — его data-speed, иначе 1000 мс
    const firstSpeed = parseInt(cases[index].dataset.speed, 10) || 1000;

    setInterval(() => {
      // Снимаем активность с текущего
      cases[index].classList.remove('rotator__case_active');

      // Следующий индекс по модулю — цикл бесконечный, без остановки таймера
      index = (index + 1) % cases.length;

      applyCase(cases[index]);
    }, firstSpeed);
  });

  function applyCase(el) {
    el.classList.add('rotator__case_active');

    // Цвет текста из data-color; если атрибута нет — не трогаем (наследуется)
    if (el.dataset.color) {
      el.style.color = el.dataset.color;
    }
  }
});