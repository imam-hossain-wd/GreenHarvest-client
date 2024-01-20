import { message } from "antd";
import { IProduct } from "../types/ProductTypes";
import { addToCart } from "../redux/slice/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/slice/wishlistSlice";
import { useAppDispatch } from "../redux/hooks";

const useProductActions = () => {
    const dispatch = useAppDispatch()
    const showMessage = (msg:string) => message.success(msg);
  
    const addToCartHandler = (product:IProduct) => {
      showMessage("Add Product Successfully");
      dispatch(addToCart(product));
    };
  
    const addToCartWishlist = (product:IProduct) => {
      showMessage("Added to Wishlist Successfully");
      dispatch(addToWishlist(product));
    };
  
    const removeToCartWishlist = (product:IProduct) => {
      showMessage("Removed from Wishlist Successfully");
      dispatch(removeFromWishlist(product));
    };
  
    return { addToCartHandler, addToCartWishlist, removeToCartWishlist };
  };
export default useProductActions;  