import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
import { SwiperNavButtons } from './SwipperNavButton';

import { Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <div className="App">
        <h1>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView="auto"
          >
            <SwiperSlide className="res-slide" />
            <SwiperSlide className="res-slide" />
            <SwiperSlide className="res-slide" />
            <SwiperSlide className="res-slide" />
            <SwiperSlide className="res-slide" />
            <SwiperSlide className="res-slide" />
            <SwiperSlide className="res-slide" />
            <SwiperSlide className="res-slide" />
            <SwiperNavButtons />
          </Swiper>
        </h1>
      </div>
    );
};

export default Slider;