import { useEffect, useState } from "react";
import {
  ArrowUpOutlined,
  WhatsAppOutlined,
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import ColorButton from "../../../components/button/ColorButton";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:-ml-14 ml-5 md:ml- w-[90%] mx-auto mb-20 lg:-mt-5">


      <div className="w-full lg:w-[50%] -ml-5 mt-16 flex flex-col justify-center items-center lg:mt-10 lg:ml-8">
        <div className="relative  lg:mt-0">

        <div className="flex flex-col justify-start  items-start">
        <h1 className="text-white absolute -top-8  bg-primary z-10 text-xl w-48 ml-5 rounded-full  p-2 italic -rotate-12 text-center mb-5">
            {" "}
            Fresh & Healthy
          </h1>
          <h1 className=" text-black z-10 bg-yellow-400 w-60 p-2 italic rounded-full -rotate-12 text-3xl text-center ">
            Vegetables
          </h1>
         
        </div>

        <h1 className="text-xl mt-10">Don't Penic, Go Organic</h1>
        <h4 className="text-3xl mt-2">
          Healthy Vegetable that <br />
          Deserve to Eat Fresh
        </h4>

        <Link className="" to="/category">
        <ColorButton className="w-36 mt-5 mb-5  rounded-full h-9">
          Shopping Now
        </ColorButton>
        </Link>
        </div>

        <div className="flex -ml-20 lg:mt-0 text-2xl w-36 justify-around mr-24">
          <Link
            to="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  text-black duration-300"
          >
            <TwitterOutlined />
          </Link>
          <Link
            to="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  text-black duration-300"
          >
            <WhatsAppOutlined />
          </Link>
          <Link
            to="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   text-black duration-300"
          >
            <FacebookFilled />
          </Link>

          <Link
            to=""
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300"
          >
            <LinkedinFilled />
          </Link>
        </div>
      </div>



      <div className="w-[100%] flex flex-col justify-center items-center lg:w-[48%]">

      <div className="relative ">
        <img
          className="w-[90%] mx-auto lg:w-[600px] ml-3 rounded-xl h-[400px] "
          src={images[currentImageIndex].img}
        />
        {/* <img
          className="w-32 h-32 -mt-16 lg:mt-0 absolute rounded-full top-10 md:top-0 -right-14 md:right-5"
          src="https://i.ibb.co/WpbXHPq/50off-removebg-preview.png"
        /> */}
      </div>

      </div>
      <ColorButton
        onClick={handleScrollToTop}
        className="animated z-10 fixed right-5 bottom-16 transition rounded-full duration-200 text-[20px] flex justify-center items-center animate-bounce w-8 h-8 font-bold bg-primary "
      >
        <ArrowUpOutlined />
      </ColorButton>
    </div>
  );
};

export default HomeBanner;
