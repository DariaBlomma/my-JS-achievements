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

let autoChange = setInterval(nextSlide, 3000);

for (slide of slides) {
    slide.addEventListener ('mouseover', () => {
        clearInterval(autoChange);
    })
}