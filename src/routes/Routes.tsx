import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Singup";
import ProductDetails from "../pages/Product/ProductDetails";
import Profile from "../pages/Dashboard/Account/Account";
import ErrorElement from "../pages/Errorpage/ErrorElement";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import Product from "../pages/Product/Product";
import DeshboardLayout from '../layout/DashboardLayout'
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import Cartitem from "../pages/Dashboard/cartItem/Cartitem";
import Payment from "../pages/Dashboard/Payment/Payment";
import Account from "../pages/Dashboard/Account/Account";
import Password from "../pages/Dashboard/Password/Password";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import Order from "../pages/Dashboard/Order/Order";
import PrivateRoute from "./PrivateRoute";
import AboutPage from "../pages/about/About";
import CategoryProduct from "../pages/Product/CategoryProduct";
import PopularProductCategory from "../pages/Home/PopularCategory/PopularProductCategory";



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
          path: "/product/category/:category",
          element: <CategoryProduct />,
        },
        {
          path: "/category/:category/:category",
          element: <CategoryProduct />,
        },
        {
          path: "/category/:category",
          element: <PopularProductCategory />,
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'contact-us',
          element: <Contact />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
          path: 'checkout',
          element: <CheckoutPage />
        },
        {
          path: 'product',
          element:<PrivateRoute> <Product /> </PrivateRoute> 
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
          element: <Dashboard />,
        },
        {
          path: "/dashboard/:user/account",
          element: <Account />,
        },
        {
          path: "/dashboard/:user/add-product",
          element: <AddProduct />,
        },
        {
          path: "/dashboard/:user/password",
          element: <Password />,
        },
        {
          path: "/dashboard/:user/order",
          element: <Order />,
        },
        {
          path: "/dashboard/:user/wish-list",
          element: <Wishlist />,
        },
        {
          path: "/dashboard/:user/cart-item",
          element: <Cartitem />,
        },
        {
          path: "/dashboard/:user/payment",
          element: <Payment/>,
        },
    
      ],
    },

  ]);