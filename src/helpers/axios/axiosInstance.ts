/* eslint-disable no-empty */
import axios from "axios";
import { getFromLocalStorage } from "../../utils/localStorage";
import { IGenericErrorResponse, ResponseSuccessType } from "../../types/ProductTypes";
import { authKey } from "../../utils/auth.Services";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;


instance.interceptors.request.use(
    function (config) {
      const accessToken = getFromLocalStorage(authKey);
      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  

  instance.interceptors.response.use(
    //@ts-ignore
  
    function (response) {
      const responseObject: ResponseSuccessType = {
        data: response?.data.data,
        // data: response?.data?.data,
        meta: response?.data?.meta,
      };
      return responseObject;
    },
    function (error) {
 
      if (error && error?.response?.data?.success === false) {

        // const responseObject:any = {
        //  message: error
        // };
        const responseObject: IGenericErrorResponse = {
          statusCode: error?.response?.status || 404,
          message: error?.response?.data?.message || "Something went wrong", 
          success:error?.response?.data?.success,
          errorMessages: error?.response?.data?.message || "This number has no Account",
        };
        return responseObject
        
      } 
      else {
        const responseObject: IGenericErrorResponse = {
          statusCode: error?.response?.data?.statusCode || 500,
          message: error?.response?.data?.message || "Something went wrong",
          errorMessages: error?.response?.data?.message,
        };
        return responseObject;
      }
    }
  
  );
  


export { instance };