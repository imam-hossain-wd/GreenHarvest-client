import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { teammate } from "../../utils/assets";

type ItemsProps = {
  image: string;
  name: string;
  title: string;
};

export default function OurTeam() {
  const { teammate1, teammate2, teammate3, teammate4, teammate5, teammate6 } =
    teammate;

  const items = [
    {
      image: teammate1,
      name: "Dorian Prince",
      title: "CFO, Accounts",
    },
    {
      image: teammate2,
      name: "Dorian Prince",
      title: "CFO, Accounts",
    },
    {
      image: teammate3,
      name: "Dorian Prince",
      title: "CFO, Accounts",
    },
    {
      image: teammate4,
      name: "Dorian Prince",
      title: "CFO, Accounts",
    },
    {
      image: teammate5,
      name: "Alex Callan",
      title: "CEO, Founder",
    },
    {
      image: teammate6,
      name: "Matthew kade",
      title: "COO, Founder",
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
    <div className="mt-5 mb-10 w-[90%] lg:w-[85%] mx-auto ]">
      <p className="text-center text-xl font-semibold mb-5">
        Meet our Super Heros
      </p>
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
            <div key={index} className="flex flex-col ">
              <SwiperSlide
                style={{ border: "0.5px solid #E8E8E8 " }}
                className=" flex flex-col bg-white mb-10 p-5 shadow-md rounded-xl"
              >
                <img
                  style={{ border: "3px solid #E8E8E8" }}
                  className="w-[200px] h-[200px] bg-[#EFF6FF] shadow-md mb-2 rounded-full"
                  src={item?.image}
                  alt="review"
                />
                <div className=" text-lg">
                  <p className=" opacity-75 mb-1">{item?.name}</p>
                  <p className="w-60 opacity-75">{item?.title}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
