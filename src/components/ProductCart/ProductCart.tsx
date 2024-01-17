/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, message } from "antd";
import {
  ShoppingCartOutlined,
  EyeOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

import { Rate } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slice/cartSlice";
import { IProduct } from "../../types/ProductTypes";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slice/wishlistSlice";
import { Link } from "react-router-dom";
import useSweetAlert from "../../hooks/useAlert";

const ProductCart = ({ product }: any) => {

  const activewishlistButton = useAppSelector(
    (state) => state.wishlist.activeWishlistButtons[product._id]
  );
  
  const showSavedAlert = useSweetAlert();
  const dispatch = useAppDispatch();

  const addToCartHandler = (product: IProduct) => {
    message.success("Add Product Successfully");
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

  return (
    <div>
      <div className="relative flex justify-center mb-2 rounded-lg">
        <img
          className="w-full h-60"
          src="https://greengrocery.com.bd/wp-content/uploads/2023/12/cinnamon-2.jpg"
        />
        <Button
          className="absolute top-5 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
        >
          <Link to={`/product/${product?._id}`}><EyeOutlined /></Link>
          
        </Button>

        {!activewishlistButton && (
          <Button
            onClick={() => addToCartWishlist(product)}
            className="absolute top-16 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
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

      <div className="flex flex-col justify-center items-center mb-5">
        <Rate disabled defaultValue={5} />;
        <p className="font-semibold text-lg text-black">{product.name}</p>
        <p className="mt-2 text-xl font-semibold text-primary">
          $ {product.price}
        </p>
        <Button
          onClick={() => addToCartHandler(product)}
          className="text-primary border-primary hover:bg-primary hover:text-white w-36 font-semibold h-10 flex justify-center items-center mt-2"
        >
          {" "}
          <span className="mr-2 text-xl">
            <ShoppingCartOutlined />
          </span>
          Add To cart{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
