import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Singup";
import ProductDetails from "../pages/Home/Product/ProductDetails";
import Profile from "../pages/Profile/Profile";
import ErrorElement from "../pages/Errorpage/ErrorElement";
import CheckoutPage from "../pages/Checkout/CheckoutPage";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/> ,
      errorElement: <ErrorElement />,
      children: [
        {
            path: '/',
            element: <Home />
        }, 
 
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'product/:id',
          element: <ProductDetails />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'checkout',
          element: <CheckoutPage />
        },
      ]
    },

  ]);