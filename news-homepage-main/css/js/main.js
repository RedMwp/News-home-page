//select menu ans icon
let menuIcon = document.querySelector('.menu-icon')
let menu = document.querySelector('#menu');


menuIcon.addEventListener('click', (e) => {
    menuIcon.classList.toggle('active');
menu.classList.toggle('active-menu')
})