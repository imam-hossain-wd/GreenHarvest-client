import { baseApi } from "./api/baseApi";
import authReducer from './slice/authSlice'
import cartSlice from "./slice/cartSlice";
import persistedReducer from "./slice/wishlistSlice";


export const reducer = {
  auth: authReducer,
  cart:cartSlice,
  wishlist: persistedReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
