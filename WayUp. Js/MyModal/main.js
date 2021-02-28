let btnOpen = document.getElementById('btn-open');
console.log(btnOpen);
let modal = document.getElementById('wrapper-modal');
console.log(modal);
let overlay = document.getElementById('overlay');
console.log(overlay);
let btnClose = document.getElementById('btn-close');
console.log(btnClose);
btnOpen.addEventListener('click', function () {
    console.log('Open click');
    modal.classList.add('active');
});

function closeModal () {
    console.log('close click');
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);




