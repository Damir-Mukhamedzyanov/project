window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav__list'),
        menuItem = document.querySelectorAll('.header__nav__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__nav__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__nav__active');
        })
    })
})