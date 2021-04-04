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



