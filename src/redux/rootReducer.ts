import { baseApi } from "./api/baseApi";
import authReducer from './slice/authSlice'
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import persistedReducer from "./slice/wishlistSlice";


export const reducer = {
  auth: authReducer,
  cart:cartSlice,
  wishlist: persistedReducer,
  product:productSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
