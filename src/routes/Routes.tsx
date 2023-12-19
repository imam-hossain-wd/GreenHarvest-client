import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Singup";
import ProductDetails from "../pages/Product/ProductDetails";
import Profile from "../pages/Dashboard/Profile/Profile";
import ErrorElement from "../pages/Errorpage/ErrorElement";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import Product from "../pages/Product/Product";
import DeshboardLayout from '../layout/DashboardLayout'
import Booking from "../pages/Dashboard/Booking/Booking";
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import Cartitem from "../pages/Dashboard/cartItem/Cartitem";
import Payment from "../pages/Dashboard/Payment/Payment";



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
        {
          path: 'product',
          element: <Product />
        },
      ]
    },

    {
      path: "/dashboard",
      element: <DeshboardLayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/dashboard",
          element: <h1>Dashboard </h1>,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard/booking",
          element: <Booking />,
        },
        {
          path: "/dashboard/wishlish",
          element: <Wishlist />,
        },
        {
          path: "/dashboard/cart-item",
          element: <Cartitem />,
        },
        {
          path: "/dashboard/payment",
          element: <Payment/>,
        },
    
      ],
    },

  ]);