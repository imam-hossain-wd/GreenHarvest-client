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
  title:string;

};

export default function OurTeam() {
  const items = [
    {
      image: "https://i.ibb.co/2PxVCLK/Mask-Group-7.png",
      name:"Dorian Prince",
     title:"CFO, Accounts",

    },
    {
      image: "https://i.ibb.co/wyWRnTL/Mask-Group-5.png",
      name:"Dorian Prince",
     title:"CFO, Accounts",

    },
    {
      image: "https://i.ibb.co/TBWG2kf/Mask-Group-3.png",
      name:"Dorian Prince",
     title:"CFO, Accounts",

    },
    {
      image: "https://i.ibb.co/TtMsZb6/Mask-Group.png",
      name:"Dorian Prince",
     title:"CFO, Accounts",

    },
    {
      image: "https://i.ibb.co/5G5GtD5/Mask-Group-2.png",
      name:"Alex Callan",
     title:"CEO, Founder",

    },
    {
      image: "https://i.ibb.co/D4fgLyZ/Mask-Group-6.png",
      name:"Matthew kade",
     title:"COO, Founder",

    },
   
  
    
  ];

  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <div className="mt-5 mb-10 w-[90%] mx-auto">
        <p className="text-center text-xl font-semibold mb-3">Meet our Super Heros</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        // slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={breakpoints}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <div className="">
          {items.map((item: ItemsProps, index: number) => (
            <div key={index} className="flex flex-col">
              <SwiperSlide
                className=" flex flex-col bg-white mb-10 p-5 "
              >
                <img
                  className="w-72 h-72 rounded mb-2"
                  src={item?.image}
                  alt="review"
                />
                <div className=" text-lg">
                  <p className=" opacity-75">{item?.name}</p>
                  <p className ="w-60  opacity-75">{item?.title}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
