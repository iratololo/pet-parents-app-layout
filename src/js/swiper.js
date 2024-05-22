import Swiper from 'swiper';
import {Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper1 = new Swiper('.swiper1', {
    modules: [Pagination, Autoplay, EffectFade],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    speed:800,
    loop: true,
    // autoHeight: true,
    pagination: {
    el: '.swiper-pagination1',
    },
    // autoplay: {
    //     delay: 4000,
    //     pauseOnMouseEnter: true,
    // },
});


const swiper2 = new Swiper('.swiper2', {
    modules: [Pagination, Autoplay, EffectFade],
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 20,
    speed:800,
    loop: true,
    // autoHeight: true,
    pagination: {
    el: '.swiper-pagination2',
    },
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
    },
}); 






