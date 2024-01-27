import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


type ItemsProps = {
  image:string;
  title:string;
  para:string;
  color:string
}

export default function ReferSection() {
  const items = [
    {
      image: "https://i.ibb.co/WgNLnvr/img-2.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#d9ecd2",
    },
    {
      image: "https://i.ibb.co/zxwMS8Q/2.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#dbe5ef",
    },
    {
      image: "https://i.ibb.co/fHD44Sg/3.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#efd8d4",
    },
    {
      image: "https://i.ibb.co/WW426x9/4.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#ffeed6",
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
    }
  };

  return (
    <div className="mt-24 lg:mt-5 w-[90%] mx-auto">
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         scrollbar={{ draggable: true }}
         autoplay={{ delay: 2000, disableOnInteraction: false }}
         breakpoints={breakpoints}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log("slide change")}
      >
         <div className="">
         {
                    items.map((item:ItemsProps, index:number)=> (
                        <div key={index} className="flex items-center">
                            <SwiperSlide className="p-3" style={{ backgroundColor: item?.color }}>
                            <img className="w-32 h-24" src={item?.image} alt={item?.title}/>

                            <div className="ml-2">
                                <h4 className="mb-3 -mt-2">{item?.title}</h4>
                                <p className="opacity-50">{item?.para}</p>
                            </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
         </div>
      </Swiper>
    </div>
  );
}
