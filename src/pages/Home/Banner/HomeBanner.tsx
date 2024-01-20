import { useEffect, useState } from "react";
import OutletButton from "../../../components/button/Button";
import {
  ArrowUpOutlined,
  PhoneFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

import ColorButton from "../../../components/button/ColorButton";

const HomeBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      img: "https://i.ibb.co/48sdQc7/Screenshot-2024-01-06-at-21-06-16-Free-Photo-Real-food-pyramid-assortment-top-view-removebg-preview.png",
    },
    {
      img: "https://i.ibb.co/VLwGmhv/Screenshot-2024-01-06-at-21-05-58-Premium-Photo-Food-isolated-removebg-preview.png",
    },
    {
      img: "https://i.ibb.co/VLwGmhv/Screenshot-2024-01-06-at-21-05-58-Premium-Photo-Food-isolated-removebg-preview.png",
    },
    {
      img: "https://i.ibb.co/vLPL7MX/Screenshot-2024-01-06-at-21-05-02-Premium-Photo-Shopping-bag-full-of-fresh-fruits-and-vegetables-wit.png",
    },

    {
      img: "https://i.ibb.co/gyJVswX/Screenshot-2024-01-06-at-21-06-26-Free-Photo-Top-view-of-fresh-foods-and-spices-vegetables-for-cooki.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex h-[430px] justify-around bg-[#3AC950] mt-12 items-center shadow">
      <div className="-mt- ml-10 text-white">
        <h1 className="text-xl ">
          Don't Penic, Go Organic
        </h1>
        <h4 className="text-3xl  mt-2">
          Healthy Vegetable that <br />
          Deserve to Eat Fresh
        </h4>

        {/* <p className="my-5 text-lg">
          We source and sell the very best beef, lamb, <br />
          fish & herbs with the care from farmers.
        </p> */}

        <OutletButton className="w-40 mt-5 text-lg font-bold h-10">
          Shopping Now
        </OutletButton>
      </div>
      {/* home banner */}
      <img
        className="w-[500px] h-[350px] "
        src={images[currentImageIndex].img}
      />
      <OutletButton
        onClick={handleScrollToTop}
        className="animated  items-center z-10 fixed right-5 bottom-16 transition rounded-full duration-200 text-[20px] flex justify-center items-center animate-bounce w-8 h-8 font-bold bg-primary "
      >
        <ArrowUpOutlined />
      </OutletButton>
      <div>
        <ColorButton
          onClick={handleScrollToTop}
          className="animated  items-center z-10 fixed right-5 bottom-36 transition rounded-full duration-200 text-[24px] flex justify-center items-center  w-10 h-10 font-bold bg-primary "
        >
          <WhatsAppOutlined />
        </ColorButton>
        <ColorButton
          onClick={handleScrollToTop}
          className="animated  items-center z-10 fixed right-5 bottom-48 transition rounded-full duration-200 text-[24px] flex justify-center items-center  w-10 h-10 font-bold bg-red-500 border-0 hover:text-red-500 hover:border hover:border-red-500 "
        >
          <PhoneFilled />
        </ColorButton>
      </div>
    </div>
  );
};

export default HomeBanner;
