"use strict"
let myTestimonialsSlider = new Swiper('.testimonials-slider', {
    autoHeight: true,
    // slidesPerView: 4,
    initialSlide: 0,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
    },
    direction: 'horizontal',

    breakpoints: {
        0: {
            slidesPerView: 3,
            direction: 'vertical',
            spaceBetween: 15,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1001: {
            direction: 'horizontal',

            slidesPerView: 4,
            spaceBetween: 30,


        },
        // 1300: {
        //     slidesPerView: 4,
        //     spaceBetween: 30,

        // },
    },
});
const textOverflow = document.querySelectorAll('.text-overflow');

function isOverflowed(el) {
    return el.scrollWidth > el.offsetWidth ||
        el.scrollHeight > el.offsetHeight;
}

function hiddenText() {
    textOverflow.forEach((element) => {
        const more = element.querySelector('.text__more');
        if (isOverflowed(element) == true) {
            element.classList.add('overflow');
            more.classList.add('overflow');
            more.addEventListener('click', () => {
                element.classList.toggle('overflow-button');
                element.classList.toggle('overflow');
            })
        }
    });
};
hiddenText();
