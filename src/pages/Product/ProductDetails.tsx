/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productApi";
import Loading from "../Shared/loading/Loading";
import { ShoppingCartOutlined , HeartOutlined,PhoneOutlined,HeartFilled } from "@ant-design/icons";
import ColorButton from "../../components/button/ColorButton";
import Review from "../review/Review";
import RelatedProduct from "./RelatedProduct";
import {  Button, Rate } from "antd";
import { useState } from "react";
import useProductActions from "../../hooks/useProductActions";
import { useAppSelector } from "../../redux/hooks";
import DeliveryOptions from "./DeliveryOptions";

const ProductDetails = () => {

  const [productCount,setProductCount]= useState(1);

  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id as string);


  const activewishlistButton = useAppSelector(
    (state) => state.wishlist.activeWishlistButtons[id!]
  );
  const { addToCartHandler, addToCartWishlist, removeToCartWishlist } = useProductActions();


  window.scroll(0,0)

  if (isLoading) {
    return <Loading />;
  }

  const product = data?.data;

  const { name, description, price, image, category } =product;

  return (
    <div className="mb-28 -mt-10  w-[96%] mx-auto">
      <h3 className="text-center my-5">Product Details page</h3>
      <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row shadow-xl p-7 rounded" style={{border:"1px solid #D3D3D3"}}>
        <div>
          <img
            className="w-[300px] h-72"
            src={image}
          />
        </div>
        <div className="text-gray-700 ml-0 lg:ml-20 text-lg ">
          <p className="text-xl font-bold text-black my-3">{name}</p>
  

          <p className="mb-2">Category: {category}</p>
          <p className="mb-2 w-96">Description : {description}</p>

         <div>
         <Rate className="text-lg " disabled defaultValue={5} />
        
         </div>
         <div className="flex mt-3">
         <p className="mb-2 "> <span className="text-2xl">${price}</span></p>
          <p className="line-through text-lg text-gray-500 mt-2 ml-2 mr-2">Tk {price -10}</p>
          <span className="text-primary  text-sm font-bold rounded w-20 h-6 p-1">10 TK OFF</span>
         </div>

        <div className="flex mt-3">
        <div className="flex items-center rounded justify-center px-3 py-1 w-28 mr-2"
          style={{border:"1px solid gray"}}
          >

            <p className="">{productCount}</p>

            <button onClick={() => {
        if (productCount > 0) {
          setProductCount(productCount - 1);
        }
      }}  className="text-2xl ml-2 w-6 h-6 border-0 bg-gray-200 rounded-full flex justify-center items-center"> - </button>
            <button onClick={()=> setProductCount(productCount + 1)} className="text-2xl ml-2 w-6 h-6 border-0 bg-gray-200 rounded-full flex justify-center items-center"> + </button>

          </div>
        <div>
            <ColorButton onClick={()=> addToCartHandler(product)} className="font-bold flex text-[17px] w-36 h-9  justify-center items-center">
              <span className="text-xl mr-2">
                <ShoppingCartOutlined />
              </span>
              Add to Cart
            </ColorButton>
          </div>
          <div className="ml-2 mt-1">
          {
            //@ts-ignore
            !activewishlistButton ? (
              <Button
                onClick={() => addToCartWishlist(product)}
                className=" items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
              >
                <HeartOutlined />
              </Button>
            ) : (
              <Button
                onClick={() => removeToCartWishlist(product)}
                className="z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold border-0 text-primary bg-transparent"
              >
                <HeartFilled />
              </Button>
            )
          }
          </div>
        </div>
        
        <div className="flex items-center mt-5 hover:text-primary text-black ">
            <p className="text-3xl mr-2"><PhoneOutlined /></p>
            <a className="no-underline text-black hover:text-primary" href="tel:+4733378901">Call for order : +01624243747</a>
          </div>
        </div>
        </div>
        <div>
        <Review productName={name}/>
        </div>
      </div>
      <div>
        <DeliveryOptions />
      </div>
      </div>
      

      <div>
        <RelatedProduct category={category}/>
      </div>
    </div>
  );
};

export default ProductDetails;
