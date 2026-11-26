document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    // --- Основная задача: управление размером шрифта ---
    const fontSizeControls = document.querySelectorAll('.font-size');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Снимаем активный класс со всех кнопок размера
            fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));

            // 2. Ставим активный класс текущей кнопке
            control.classList.add('font-size_active');

            // 3. Очищаем классы изменения размера у книги
            book.classList.remove('book_fs-big', 'book_fs-small');

            // 4. Добавляем нужный класс в зависимости от data-атрибута
            const size = control.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
            // Если data-size нет (средний размер), классы просто очищены выше
        });
    });

    // --- Повышенный уровень сложности: управление цветом текста и фона ---
    const textColorControls = document.querySelectorAll('[data-text-color]');
    const bgColorControls = document.querySelectorAll('[data-bg-color]');

    // Управление цветом текста
    textColorControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();

            // Снимаем активный класс с палитры текста
            textColorControls.forEach(btn => btn.classList.remove('color_active'));
            control.classList.add('color_active');

            // Очищаем все классы цвета текста у книги
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            // Добавляем нужный класс
            const color = control.dataset.textColor;
            book.classList.add(`book_color-${color}`);
        });
    });

    // Управление цветом фона
    bgColorControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();

            // Снимаем активный класс с палитры фона
            bgColorControls.forEach(btn => btn.classList.remove('color_active'));
            control.classList.add('color_active');

            // Очищаем все классы фона у книги
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            // Добавляем нужный класс
            const color = control.dataset.bgColor;
            book.classList.add(`book_bg-${color}`);
        });
    });
});