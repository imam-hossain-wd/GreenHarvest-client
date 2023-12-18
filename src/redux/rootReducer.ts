import { baseApi } from "./api/baseApi";
import authReducer from './slice/authSlice'

export const reducer = {
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
