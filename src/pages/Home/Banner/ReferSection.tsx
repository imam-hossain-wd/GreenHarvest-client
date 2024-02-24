import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


type ItemsProps = {
  image:string;
  title:string;
  para:string;
  color:string
}
//__________colors____________
  // green light : #CAE7E3
  // ‍Vanilla Ice : #F5E2E4
  // sky light : #dbe5ef
  // gray light : #E5E4E5


export default function ReferSection() {
  const items = [
    {
      image: "https://i.ibb.co/WgNLnvr/img-2.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#CAE7E3",
    },
    {
      image: "https://i.ibb.co/fHD44Sg/3.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#F5E2E4",   
    },
    {
      image: "https://i.ibb.co/zxwMS8Q/2.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#dbe5ef",
  
    },
    {
      image: "https://i.ibb.co/WW426x9/4.png",
      title: "Refer spring cleaning for home appliance",
      para: "Get your clean on supplies.",
      color: "#E5E4E5",
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
    <div className="mt-24 lg:mt-5 w-[85%] mx-auto">
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         scrollbar={{ draggable: true }}
         autoplay={{ delay: 2000, disableOnInteraction: false }}
         breakpoints={breakpoints}
      >
         <div className="">
         {
                    items.map((item:ItemsProps, index:number)=> (
                        <div key={index} className="flex ">
                            <SwiperSlide className="p-3 rounded-lg" style={{ backgroundColor: item?.color }}>
                            <img className="w-32 h-24" src={item?.image} alt={item?.title}/>

                            <div className="ml-2 text-[#181818]">
                                <p className="mb-2 -mt-2 font-semibold text-[16px]">{item?.title}</p>
                                <p className="text-[16px]">{item?.para}</p>
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
