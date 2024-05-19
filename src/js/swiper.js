import Swiper from 'swiper';
import {Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Pagination, Autoplay, EffectFade],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    speed:800,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    },
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
    },
//     effect: 'fade',
//     fadeEffect: {
//     crossFade: true
//   },
});
