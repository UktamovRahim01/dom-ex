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
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let reclam = document.querySelectorAll(".promo__adv img")
reclam.forEach(rec => {
    rec.remove()
})

let rectext = document.querySelector(`.promo__adv-title`)
rectext.textContent = "Место для вашей рекламы"

let janr = document.querySelector(".promo__genre")
janr.innerHTML = "драма";

let promo_bg = document.querySelector(".promo__bg")
promo_bg.style.backgroundImage = "url(img/bg.jpg)"
