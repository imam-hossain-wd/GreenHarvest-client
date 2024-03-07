import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";
import { Pagination ,Autoplay} from "swiper/modules";


const SpecialOffers = () => {

  const image_datas = [
    { url: "https://i.ibb.co/N1YQN0c/delivery-free.webp" },
    { url: "https://i.ibb.co/XtcHMp2/organic-product.webp" },
    { url: "https://i.ibb.co/nL93Jby/big-sale.png" },
    { url: "https://i.ibb.co/922cWwf/last-minute-offer.png" },
    { url: "https://i.ibb.co/rFHPQt7/special-offer.png" },
    { url: "https://i.ibb.co/VSsVFxz/refer-friend.png" },
    { url: "https://i.ibb.co/d5PWW4g/buy-get.png" },
    { url: "https://i.ibb.co/hYtgyxz/premium.png" },    
  ];

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <div className="w-[90%] mx-auto mt-10 mb-20">
      <Swiper
        modules={[Pagination, Autoplay]} 
        className="mySwiper"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={breakpoints}
      >
        {image_datas.map((image, index) => (
          <SwiperSlide key={index} >
            <div className=" ">
            <img className="h-[180px] w-[250px] rounded" src={image.url} alt="images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SpecialOffers;