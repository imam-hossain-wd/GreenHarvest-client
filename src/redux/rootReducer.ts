import { baseApi } from "./api/baseApi";
import authReducer from './slice/authSlice'
import cartSlice from "./slice/cartSlice";

export const reducer = {
  auth: authReducer,
  cart:cartSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
