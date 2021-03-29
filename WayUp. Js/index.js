/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/
let prevBtn = document.getElementById('btn-prev');
console.log(prevBtn);
let nextBtn = document.getElementById('btn-next');
console.log(nextBtn);
let slides = document.querySelectorAll('.slide');
console.log(slides);
let dots = document.querySelectorAll('.dot');
console.log(dots);
let index = 0;

function activeSlide () {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[index].classList.add('active');
}

function activeDot () {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}

function prepareCurrentSlide (ind) {
    activeSlide(index);
    activeDot(index);
}
function nextSlide () {
    if (index == slides.length -1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

function prevSlide () {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
    index--;
    prepareCurrentSlide(index);
    }
}


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach(function(item, indexDot) {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

let autoChange = setInterval(nextSlide, 2000);

for (slide of slides) {
    slide.addEventListener ('mouseover', () => {
        clearInterval(autoChange);
    })
}
/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/

