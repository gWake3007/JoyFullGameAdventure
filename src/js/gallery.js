import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        slidesPerView: 1.5,
        centeredSlides: true,
        loop: true,
        spaceBetween: 5,

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },


        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
            slideChange: function () {
                const activeIndex = this.realIndex;
                const items = document.querySelectorAll('.pagination-item');


                items.forEach((item, index) => {
                    if (index === activeIndex) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            },
        },
    });


    const paginationItems = document.querySelectorAll('.pagination-item');
    paginationItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            swiper.slideToLoop(index);
        });
    });
});
