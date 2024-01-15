import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useGetProductQuery } from "../../../redux/api/productApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import useProductState from "../../../hooks/useProductState";
import { useEffect } from "react";
import { setCategory } from "../../../redux/slice/productSlice";
import { IProduct } from "../../../types/ProductTypes";
import Loading from "../../Shared/loading/Loading";
import ColorButton from "../../../components/button/ColorButton";
import { Button, message } from "antd";
import { Link } from "react-router-dom";
import useSweetAlert from "../../../hooks/useAlert";
import { addToCart } from "../../../redux/slice/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../../redux/slice/wishlistSlice";
import {
    ShoppingCartOutlined,
    EyeOutlined,
    HeartOutlined,
    HeartFilled,
  } from "@ant-design/icons";

const ProductCarousel = () => {
  const dispatch = useAppDispatch();
  const showSavedAlert = useSweetAlert();
  const productState = useProductState();

  const { data, isLoading } = useGetProductQuery(productState);

  const products = data?.data;
  console.log(products, "fruits products");

  const activewishlistButton = useAppSelector(
    (state) => state.wishlist.activeWishlistButtons[products._id]
  );
  
 


  useEffect(() => {
    dispatch(setCategory("Fruits"));
  }, [dispatch]);

// handler 
const addToCartHandler = (product: IProduct) => {
    // message.success("Add Product Successfully");
    dispatch(addToCart(product));
    showSavedAlert("Add to cart successfully")
  };
  const addToCartWishlist = (product: IProduct) => {
    message.success("Added wishlist Successfully");
    dispatch(addToWishlist(product));
  };
  const removeToCartWishlist = (product: IProduct) => {
    message.success("Remove wishlist Successfully");
    dispatch(removeFromWishlist(product));
  };




  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="swiper-container relative w-[90%] mx-auto">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
         {/* availability category description image name netWeight price quantity */}
        {products?.map((product: IProduct, index: number) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-xl border border-[5px]border-gray-200 rounded w-72 h-80 p-2 my-10">

                <div className="flex justify-around">
                <p style={{border:"1px sloid #37B149"}} className="text-sm text-xs border border-primary text-white bg-primary px-3 py-1 -ml-4 rounded-full">50% OFF</p>
                {/* product details wishlish button */}
                <div>
                <Button
          className="absolute top-5 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
        >
          <Link to={`/product/${product?._id}`}><EyeOutlined /></Link>
          
        </Button>

        {!activewishlistButton && (
          <Button
            onClick={() => addToCartWishlist(product)}
            className="absolute top-14 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
          >
            <HeartOutlined />
          </Button>
        )}
        {activewishlistButton && (
          <Button
            onClick={() => removeToCartWishlist(product)}
            className="absolute top-16 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold border-0  text-primary bg-transparent"
          >
            <HeartFilled />
          </Button>
        )}
                </div>
                </div>
              <div className="flex justify-center overflow-hidden">
              <img
              className="w-40 h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src="https://i.ibb.co/cbbhKsm/shopping-banner.png"
                alt={`Slide ${index}`}
              />
              </div>

              <div className="-ml-20 mt-2">
                <p className="text-sm">Name : {product?.name}</p>
                <p className="text-sm">Net Weight : {product?.netWeight}</p>
                <p className="text-sm">Price : $ {product?.price}</p>
              </div>
              <div className="flex justify-center items-center">
              <ColorButton onClick={()=> addToCartHandler(product)} className="mt-2 flex justify-center items-center">
              <span className="mr-2 text-xl">
            <ShoppingCartOutlined />
          </span>
                 Add To Cart</ColorButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 bg-black opacity-25 text-white hover:bg-primary hover:opacity-100 w-9 h-9 flex justify-center items-center rounded-full">
        <RightOutlined className="text-xl" />
      </div>

      <div className="swiper-button-prev absolute top-1/2 -left-6 bg-black opacity-25 text-white hover:bg-primary hover:opacity-100 rounded-full w-9 h-9 flex justify-center items-center transform -translate-y-1/2 z-10">
        <LeftOutlined className="text-xl" />
      </div>
    </div>
  );
};

export default ProductCarousel;
