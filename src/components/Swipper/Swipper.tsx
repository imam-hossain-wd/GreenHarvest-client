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

  return (
    <div className="w-[90%] mx-auto my-20">
      <Swiper
        slidesPerView={4}
        spaceBetween={33}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} 
        className="mySwiper"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
