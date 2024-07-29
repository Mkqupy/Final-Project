let event1 = document.querySelector('.event1');
let modal1 = document.querySelector('.modal1');
let closeBtn = document.querySelector('.closeBtn');
let backdrop = document.querySelector('.backdrop');

event1.addEventListener( 'click', () => {
    modal1.classList.add('active1');
    backdrop.classList.add('activeBackdrop');
});

closeBtn.addEventListener( 'click', () => {
    modal1.classList.remove('active1');
    backdrop.classList.remove('activeBackdrop');
});

backdrop.addEventListener( 'click', () => {
    modal1.classList.remove('active1');
    backdrop.classList.remove('activeBackdrop');
});