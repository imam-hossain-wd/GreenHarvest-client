import { Rate } from "antd";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ItemsProps = {
  image: string;
  name: string;
  comment:string;
  rating:number;
};

// 
// 

// 
export default function Review() {
  const items = [
    {
      image: "https://i.ibb.co/xhVYFCM/user1.jpg",
      name: "John Doe",
      comment: "Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.",
      rating: 5,
    },
    {
      image: "https://i.ibb.co/tKzNnFY/user5.png",
      name: "John Doe",
      comment: "Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.",
      rating: 4,
    },
    {
      image: "https://i.ibb.co/xhVYFCM/user1.jpg",
      name: "John Doe",
      comment: "Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.",
      rating: 5,
    },
    {
      image: "https://i.ibb.co/vVxjhkG/user4.png",
      name: "John Doe",
      comment: "Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.",
      rating: 3,
    },
    {
      image: "https://i.ibb.co/mb531VR/user3.jpg",
      name: "John Doe",
      comment: "Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.",
      rating: 4,
    },
    {
      image: "https://i.ibb.co/xhVYFCM/user5.jpg",
      name: "John Doe",
      comment: "Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.",
      rating: 5,
    },
    
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
  };

  return (
    <div className="mt-5 mb-10 w-[90%] mx-auto">
        <h2 className="text-center mb-3">Customer's Review</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        // slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={breakpoints}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="">
          {items.map((item: ItemsProps, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <SwiperSlide
                className="p-3 flex flex-col bg-white shadow-xl mb-10 p-5 "
              >
                <img
                  className="w-20 h-20 rounded-full mb-2"
                  src={item?.image}
                  alt="review"
                />
                <div className="ml-2">
                  <Rate className="text-lg mb-3" disabled defaultValue={item?.rating} />
                  <p className="mb-3 -mt-2 text-sm opacity-75">{item?.name}</p>
                  <p className="mb-3 w-60 -mt-2 text-sm opacity-75">{item?.comment}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
