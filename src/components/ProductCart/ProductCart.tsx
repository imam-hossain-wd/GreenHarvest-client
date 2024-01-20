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
import ColorButton from "../button/ColorButton";

const ProductCart = ({ product }: any) => {
  const activewishlistButton = useAppSelector(
    (state) => state.wishlist.activeWishlistButtons[product._id]
  );

  const showSavedAlert = useSweetAlert();
  const dispatch = useAppDispatch();

  const addToCartHandler = (product: IProduct) => {
    message.success("Add Product Successfully");
    dispatch(addToCart(product));
    showSavedAlert("Add to cart successfully");
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
    <div
      className="relative bg-white shadow-xl rounded w-full w-72 py-4 mt-2"
      style={{ border: "1px solid #A8A8A8" }}
    >
      <div className="flex justify-around">
        <p
          style={{ border: "1px sloid #37B149" }}
          className="text-sm text-xs  border-primary text-white bg-primary px-3 py-1 -ml-4 rounded-full"
        >
          2% OFF
        </p>
        <div>
          <Button className="absolute top-6  right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary">
            <Link to={`/product/${product?._id}`}>
              <EyeOutlined />
            </Link>
          </Button>
          <Button className="absolute top-6  right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary">
            <Link to={`/product/${product?._id}`}>
              <EyeOutlined />
            </Link>
          </Button>

          {
            //@ts-ignore
            !activewishlistButton ? (
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
            )
          }
        </div>
      </div>
      <div className="flex justify-center overflow-hidden">
        <img
          className="w-40 h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={product?.image}
          alt={`Slide 1`}
        />
        {/* <img
          className="w-40 h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src="https://i.ibb.co/cbbhKsm/shopping-banner.png"
          alt={`Slide 1`}
        /> */}
      </div>

      <div className="flex flex-col ml-14">
        <Rate className="text-lg " disabled defaultValue={5} />

        <div className=" mt-2 text-[15px] text-start mb-2">
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
  );
};

export default ProductCart;
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button, message } from "antd";
// import {
//   ShoppingCartOutlined,
//   EyeOutlined,
//   HeartOutlined,
//   HeartFilled,
// } from "@ant-design/icons";

// import { Rate } from "antd";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { addToCart } from "../../redux/slice/cartSlice";
// import { IProduct } from "../../types/ProductTypes";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../redux/slice/wishlistSlice";
// import { Link } from "react-router-dom";
// import useSweetAlert from "../../hooks/useAlert";

// const ProductCart = ({ product }: any) => {

//   const activewishlistButton = useAppSelector(
//     (state) => state.wishlist.activeWishlistButtons[product._id]
//   );

//   const showSavedAlert = useSweetAlert();
//   const dispatch = useAppDispatch();

//   const addToCartHandler = (product: IProduct) => {
//     message.success("Add Product Successfully");
//     dispatch(addToCart(product));
//     showSavedAlert("Add to cart successfully")
//   };
//   const addToCartWishlist = (product: IProduct) => {
//     message.success("Added wishlist Successfully");
//     dispatch(addToWishlist(product));
//   };
//   const removeToCartWishlist = (product: IProduct) => {
//     message.success("Remove wishlist Successfully");
//     dispatch(removeFromWishlist(product));
//   };

//   return (
//     <div>
//       <div className="relative flex justify-center mb-2 rounded-lg">
//         <img
//           className="w-full h-60"
//           src="https://greengrocery.com.bd/wp-content/uploads/2023/12/cinnamon-2.jpg"
//         />
//         <Button
//           className="absolute top-5 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
//         >
//           <Link to={`/product/${product?._id}`}><EyeOutlined /></Link>

//         </Button>

//         {!activewishlistButton && (
//           <Button
//             onClick={() => addToCartWishlist(product)}
//             className="absolute top-16 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold bg-[#e4f9c5] border-0 text-primary hover:text-white hover:bg-primary border-primary"
//           >
//             <HeartOutlined />
//           </Button>
//         )}
//         {activewishlistButton && (
//           <Button
//             onClick={() => removeToCartWishlist(product)}
//             className="absolute top-16 right-5 items-center z-10 transition rounded-full duration-200 text-[20px] flex justify-center items-center w-8 h-8 font-bold border-0  text-primary bg-transparent"
//           >
//             <HeartFilled />
//           </Button>
//         )}
//       </div>

//       <div className="flex flex-col justify-center items-center mb-5">
//         <Rate disabled defaultValue={5} />;
//         <p className="font-semibold text-lg text-black">{product.name}</p>
//         <p className="mt-2 text-xl font-semibold text-primary">
//           $ {product.price}
//         </p>
//         <Button
//           onClick={() => addToCartHandler(product)}
//           className="text-primary border-primary hover:bg-primary hover:text-white w-36 font-semibold h-10 flex justify-center items-center mt-2"
//         >
//           {" "}
//           <span className="mr-2 text-xl">
//             <ShoppingCartOutlined />
//           </span>
//           Add To cart{" "}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProductCart;
