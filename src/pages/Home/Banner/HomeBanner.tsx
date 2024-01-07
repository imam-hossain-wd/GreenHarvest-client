import { useEffect, useState } from "react";
import OutletButton from "../../../components/button/Button";



const HomeBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      img:"https://i.ibb.co/48sdQc7/Screenshot-2024-01-06-at-21-06-16-Free-Photo-Real-food-pyramid-assortment-top-view-removebg-preview.png"
    },
    {
      img:"https://i.ibb.co/VLwGmhv/Screenshot-2024-01-06-at-21-05-58-Premium-Photo-Food-isolated-removebg-preview.png"
    },
    {
      img:"https://i.ibb.co/VLwGmhv/Screenshot-2024-01-06-at-21-05-58-Premium-Photo-Food-isolated-removebg-preview.png"
    },
    {
      img:"https://i.ibb.co/vLPL7MX/Screenshot-2024-01-06-at-21-05-02-Premium-Photo-Shopping-bag-full-of-fresh-fruits-and-vegetables-wit.png"
    },

    {
      img:"https://i.ibb.co/gyJVswX/Screenshot-2024-01-06-at-21-06-26-Free-Photo-Top-view-of-fresh-foods-and-spices-vegetables-for-cooki.png"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex h-screen justify-around bg-[#78af2f] mt-12 items-center">
      <div className="-mt-28">
    <h1 className="text-5xl">Healthy Vegetable that <br />
Deserve to Eat Fresh</h1>

<p className="my-5 text-lg">We source and sell the very best beef, lamb, <br />
fish & herbs with the care from farmers.</p>

<OutletButton className="w-36 text-lg font-bold h-10">
getting start
</OutletButton>
      </div>
      {/* home banner */}
      <img className="w-[550px] h-[400px]" 
      src={images[currentImageIndex].img}
      />
    </div>
  );
};

export default HomeBanner;

