/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Lоган",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv'),
    imgAdv = adv.querySelectorAll('img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    promoInt= document.querySelector('.promo__interactive-list');

imgAdv.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Драма';

promoBg.style.cssText = `background: url(../img/bg.jpg) center center/cover no-repeat`;

promoInt.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promoInt.innerHTML += `
    <li class='promo__interactive-item'>${i + 1}. ${film}</li>
    <div class='delete'></div>
    `;
});
