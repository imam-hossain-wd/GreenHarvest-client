import  { useEffect } from 'react';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css'; // Import Swiper styles

const MySlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-slider", {
      centeredSlides: true,
      slidesPerView: 1,
      grabCursor: true,
      freeMode: false,
      loop: true,
      mousewheel: false,
      keyboard: {
        enabled: true
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        640: {
          slidesPerView: 1.25,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });

    // Clean up Swiper instance when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures that useEffect runs once after initial render

  return (
    <main>
      <section className="section slider-section">
        <div className="container slider-column">
          <div className="swiper swiper-slider">
            <div className="swiper-wrapper">
              <img className="swiper-slide" src="https://source.unsplash.com/1920x1280/?animal" alt="Swiper" />
              <img className="swiper-slide" src="https://source.unsplash.com/1920x1280/?nature" alt="Swiper" />
              <img className="swiper-slide" src="https://source.unsplash.com/1920x1280/?people" alt="Swiper" />
              <img className="swiper-slide" src="https://source.unsplash.com/1920x1280/?flower" alt="Swiper" />
              <img className="swiper-slide" src="https://source.unsplash.com/1920x1280/?travel" alt="Swiper" />
              <img className="swiper-slide" src="https://source.unsplash.com/1920x1280/?fruits" alt="Swiper" />
            </div>
            <span className="swiper-pagination"></span>
            <span className="swiper-button-prev"></span>
            <span className="swiper-button-next"></span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MySlider;
