import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  EyeOutlined,
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Button, Rate } from "antd";
import { IProduct } from "../../types/ProductTypes";
import ColorButton from "../button/ColorButton";
import useProductActions from "../../hooks/useProductActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";

//@ts-ignore
const ProductSwiper = ({ products,category, offer }) => {

    const [slidesToShow, setSlidesToShow] = useState(5);
const dispatch = useAppDispatch();

const navigationNextClassName = `swiper-button-next-${category}`;
const navigationPrevClassName = `swiper-button-prev-${category}`;


const { addToCartHandler, addToCartWishlist, removeToCartWishlist } =
useProductActions();

const activeWishlistButtons = useAppSelector(
(state) => state?.wishlist?.activeWishlistButtons
);


const updateSlidesToShow = () => {
  const width = window.innerWidth;
  if (width < 640) {
    setSlidesToShow(1);
  } else if (width < 768) {
    setSlidesToShow(2);
  } else if (width < 1024) {
    setSlidesToShow(3);
  } else {
    setSlidesToShow(5);
  }
};

useEffect(() => {

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [dispatch]);

  const LinkOfferSection = <>
  <div className="flex justify-between mb-2">
        
        <div className="flex">
            <h3>{offer?.title}</h3>
            <p
              className="text-sm text-xs border border-primary text-white bg-primary px-2 py-1 ml-3 rounded"
            >
              {offer?.weiver}
            </p>
          </div>
  
          <ColorButton className="w-20 h-6 flex justify-center items-center">
            <Link to="/product/category/Fruits">View All</Link>
          </ColorButton>
        </div>
  </>


  return (
    <div className="swiper-container relative mt-5">
      {
        LinkOfferSection
      }
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesToShow}
        navigation={{
            nextEl: `.${navigationNextClassName}`,
            prevEl: `.${navigationPrevClassName}`,
        }}
        scrollbar={{ draggable: true }}
      >
        <div className=" bg-white shadow-xl rounded w-full lg:w-72 h-80 p-2 my-10 border-4 border-green-500">
          {products?.map((product: IProduct, index: number) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white shadow-xl rounded w-full w-72 py-4 mt-2"
                style={{ border: "1px solid #A8A8A8" }}
              >
                <div className="flex justify-around">
                  <p
                    style={{ border: "1px sloid #37B149" }}
                    className="text-sm text-xs  border-primary text-white bg-primary px-3 py-1 -ml-4 rounded-full"
                  >
                    10% OFF
                  </p>
                  <div>
                    <Button className="absolute top-6  right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary">
                      <Link to={`/product/${product?._id}`}>
                        <EyeOutlined />
                      </Link>
                    </Button>

                    {!activeWishlistButtons[product?._id as string] ? (
                      <Button
                        onClick={() => addToCartWishlist(product)}
                        className="absolute top-16 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
                      >
                        <HeartOutlined />
                      </Button>
                    ) : (
                      <Button
                        onClick={() => removeToCartWishlist(product)}
                        className="absolute top-16 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold border-0 text-primary bg-transparent"
                      >
                        <HeartFilled />
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex justify-center overflow-hidden">
                  <img
                    className="w-40 h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    src={product?.image}
                    alt={`Slide ${index}`}
                  />
                </div>

                <div className="flex flex-col">
                  <Rate className="text-lg -ml-4" disabled defaultValue={5} />

                  <div className="ml-10 mt-2 text-[15px] text-start mb-2">
                    <p className="">Name : {product?.name}</p>
                    <p className="">Net Weight : {product?.netWeight}</p>
                    <p className="">Price : $ {product?.price}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <ColorButton
                    onClick={() => addToCartHandler(product)}
                    className="mt-2 flex justify-center items-center"
                  >
                    <span className="mr-2 text-xl font-bold">
                      <ShoppingCartOutlined />
                    </span>
                    Add To Cart
                  </ColorButton>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className={`${navigationNextClassName} absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 bg-black opacity-25 -mt-5 text-white hover:bg-primary hover:opacity-100 w-9 h-9 flex justify-center items-center rounded-full`}>
        <RightOutlined className="text-xl" />
      </div>

      <div className={`${navigationPrevClassName} absolute top-1/2 -left-6 -mt-5 bg-black opacity-25 text-white hover:bg-primary hover:opacity-100 rounded-full w-9 h-9 flex justify-center items-center transform -translate-y-1/2 z-10`} >
        <LeftOutlined className="text-xl" />
      </div>
    </div>
  );
};

export default ProductSwiper;
