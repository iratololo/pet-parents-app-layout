import Swiper from 'swiper';
import {Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiper = new Swiper('.swiper', {
//     modules: [Pagination, Autoplay, EffectFade],
//     direction: 'horizontal',
//     slidesPerView: 1,
//     spaceBetween: 20,
//     speed:800,
//     loop: true,
//     // autoHeight: true,
//     pagination: {
//     el: '.swiper-pagination',
//     },
//     // autoplay: {
//     //     delay: 4000,
//     //     pauseOnMouseEnter: true,
//     // },
// });


function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
            };
		});
	}
}


function initSliders() { 
    bildSliders();

    if (document.querySelector('.hero__swiper')) { 
        new Swiper('.swiper', {
            modules: [Pagination, Autoplay, EffectFade],
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            loop: true,
            // autoHeight: true,
            pagination: {
                el: '.swiper-pagination',
            },
            // autoplay: {
            //     delay: 4000,
            //     pauseOnMouseEnter: true,
            // }, 
        });
    };
};

initSliders();