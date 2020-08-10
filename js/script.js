$('.overview__carousel').slick({
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
});


//Hamburger

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__menu'),
            menuItem = document.querySelectorAll('.header__item'),
            hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header__menu_active');
            })
        })
    });

    