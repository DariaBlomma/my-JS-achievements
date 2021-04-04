//TABS
$('.card').on('click', function() {
    let currTab = $(this).parent().index();
    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active'); //eq binds contents with tabs index
});

//hamburger menu
//click on hamburger
$('.hamburger').on('click', function() {
    $('.head__menu').toggle();
});
//click on button close inside the menu
$('.menu-close').on('click', function() {
    $('.head__menu').hide();
});

//parallax
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

//swiper slider  swiperjs.com
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    }
});

//map yandex
ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: ['zoomControl', 'geolocationControl']
    });
}
//form validation
$.validator.addMethod('regex', function (value, element, regexp) {
    let regExp = new RegExp(regexp);
    return regExp.test(value)
}, 'Please check your input');
    
$('form').validate({ 
    rules: {
        firstName: { 
            required: true,
            regex: "[A-Za-z]{1-32}"
        },
        phoneNumber: { 
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    },
    messages: {
        firstName: 'Write the name correctly',
        phoneNumber: 'Write your phone number correctly'
    }
});