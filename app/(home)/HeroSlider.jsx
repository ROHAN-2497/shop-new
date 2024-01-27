import React from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
const HeroSlider = () => {
    return (
        <div className='main-slider'>
            <Swiper
                slidesPerView={1}
                loop navigation effect='fade'
                modules={[Navigation, EffectFade, Autoplay]}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default HeroSlider;