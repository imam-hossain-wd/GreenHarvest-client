import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";

import { Pagination ,Autoplay} from "swiper/modules";

export default function Swipper() {
  const image_datas = [
    { url: "https://greengrocery.com.bd/wp-content/uploads/2023/05/tea-2.png" },
    { url: "https://greengrocery.com.bd/wp-content/uploads/2023/06/G-P-7.jpg" },
    {
      url: "https://greengrocery.com.bd/wp-content/uploads/2022/10/Packeg-4.jpg",
    },
    { url: "https://greengrocery.com.bd/wp-content/uploads/2022/09/p-4.jpg" },
    { url: "https://greengrocery.com.bd/wp-content/uploads/2022/09/p-5-1.jpg" },
    { url: "https://greengrocery.com.bd/wp-content/uploads/2022/09/p-5-1.jpg" },
    { url: "https://greengrocery.com.bd/wp-content/uploads/2022/09/p-5-1.jpg" },
    { url: "https://greengrocery.com.bd/wp-content/uploads/2022/09/p-5-1.jpg" },
  ];

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <div className="w-[90%] mx-auto my-20">
         <h1 className="lg:text-center mb-2">Special Packages & Offers</h1>
      <Swiper

        pagination={{
          clickable: true,
          // el: ".swiper-pagination",
        }}
        modules={[Pagination, Autoplay]} 
        className="mySwiper"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={breakpoints}
      >
        {image_datas.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="" src={image.url} alt="images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
