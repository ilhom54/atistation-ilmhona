document.addEventListener('DOMContentLoaded', () => { // Обработчик события загрузки DOM 
    const getCatButton = document.getElementById('get-cat'); // Получение кнопки "Получить кота" 
    const addFavoriteButton = document.getElementById('add-favorite'); // Получение кнопки "Добавить в избранное" 
    const catImage = document.getElementById('cat-image'); // Получение элемента изображения кота 
    const favoritesList = document.getElementById('favorites-list'); // Получение списка избранных изображений 

    // Загрузка избранных изображений из localStorage и их отображение
    const loadFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Получение избранных изображений из localStorage 
        favoritesList.innerHTML = ''; // Очистка списка избранных изображений 
        favorites.forEach(url => { // Перебор избранных изображений 
            const li = document.createElement('li'); // Создание элемента списка 
            const img = document.createElement('img'); // Создание элемента изображения 
            img.src = url; // Установка URL изображения 
            img.style.width = '100px'; // Установка ширины изображения 
            img.style.height = '100px'; // Установка высоты изображения 
            li.appendChild(img); // Добавление изображения в элемент списка 
            favoritesList.appendChild(li); // Добавление элемента списка в список избранных изображений 
        });
    };

    // Получение случайного изображения кота из API и его отображение
    const getCat = () => {
        fetch('https://api.thecatapi.com/v1/images/search') // Запрос к API для получения случайного изображения кота 
            .then(response => response.json()) // Преобразование ответа в JSON 
            .then(data => {
                catImage.src = data[0].url; // Установка URL изображения кота 
            })
            .catch(error => { // Обработка ошибок 
                console.error("Ошибка:", error); // Вывод ошибки в консоль 
                alert("Не удалось загрузить кота"); // Вывод сообщения об ошибке 
            });
    };

    // Добавление текущего изображения кота в избранное
    const addFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Получение избранных изображений из localStorage 
        favorites.push(catImage.src); // Добавление текущего изображения кота в избранное 
        localStorage.setItem('favorites', JSON.stringify(favorites)); // Сохранение обновленного списка избранных изображений в localStorage 
        loadFavorites(); // Обновление отображения списка избранных изображений 
    };

    getCatButton.addEventListener('click', getCat); // Добавление обработчика события клика для кнопки "Получить кота" 
    addFavoriteButton.addEventListener('click', addFavorite); // Добавление обработчика события клика для кнопки "Добавить в избранное" 

    // Удаление изображения из избранного при клике
    favoritesList.addEventListener('click', (event) => { // Добавление обработчика события клика для списка избранных изображений 
        if (event.target.tagName === 'IMG') { // Проверка, что клик был по изображению 
            const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Получение избранных изображений из localStorage 
            const newFavorites = favorites.filter(url => url !== event.target.src); // Фильтрация списка избранных изображений 
            localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Сохранение обновленного списка избранных изображений в localStorage 
            loadFavorites(); // Обновление отображения списка избранных изображений 
        }
    });

    // Загрузка избранных изображений при загрузке страницы
    loadFavorites(); // Вызов функции загрузки избранных изображений

    // Создание кнопки удаления всех избранных изображений
    const deleteAllButton = document.getElementById('button'); // Создание элемента кнопки 
    document.body.appendChild(deleteAllButton); // Добавление кнопки в тело документа 

    // Обработчик события клика для кнопки удаления всех избранных изображений
    deleteAllButton.addEventListener('click', () => {
        localStorage.removeItem('favorites'); // Удаление всех избранных изображений из localStorage 
        loadFavorites(); // Обновление отображения списка избранных изображений 
    });
});