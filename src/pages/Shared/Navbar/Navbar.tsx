/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Drawer, Dropdown } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CloseOutlined,
  LoginOutlined,
  MenuOutlined,
  UserOutlined,
  SendOutlined,
} from "@ant-design/icons";
import CartDrawer from "../../../components/Drawer/CartDrawer";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  clearAccessToken,
  selectAccessToken,
} from "../../../redux/slice/authSlice";
import {
  authKey,
  getUserInfo,
  removeUserInfo,
} from "../../../utils/auth.Services";
import OutletButton from "../../../components/button/Button";
import './style.css'
import ColorButton from "../../../components/button/ColorButton";
import Submenu from "./SubMenu";


const Navbar = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const accessToken = useAppSelector(selectAccessToken);
  const { role } = getUserInfo() as any;
  const location = useLocation();
  console.log(location.pathname, "location.pathname");

  const showDrawer = () => {
    setOpen(true);
  };

  const accountItems = [
    {
      key: "1",
      label: (
        <div>
          <div className="flex flex-col">
            <Button type="text">
              <Link to={`/dashboard/${role}/account`}> Account</Link>
            </Button>
            <Button type="text">
              <Link to="/dashboard"> Dashboard</Link>
            </Button>
            <Button
              onClick={() => {
                removeUserInfo(authKey);
                dispatch(clearAccessToken());
              }}
              danger
              type="text"
            >
              Log out
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const closedButton = (
      <OutletButton
        onClick={() => setOpen(!open)}
        className="ml-72 lg:hidden text-xl h-8 w-8 rounded-full flex justify-center items-center mr-3 "
      >
        <CloseOutlined />
      </OutletButton>
  );

  const navMenuItems = (
    <li className="list-none flex flex-col justify-center items-center lg:flex-row">
      <Link
        className={`${
          location.pathname === "/" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`${
          location.pathname === "/product" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        to="/product"
      >
        Product
      </Link>
      <Link
        className={`${
          location.pathname === "/contact-us" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        to="/contact-us"
      >
        Contact us
      </Link>
      <Link
        className={`${
          location.pathname === "/about" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        to="/about"
      >
        About us
      </Link>
      <Link
        className={`${
          location.pathname === "/blog" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        to="/blog"
      >
        Blog
      </Link>

      <div className="relative group">
        <div className="group w-full">
          <Link
            className={`${
              location.pathname === "/category" ? "text-primary" : ""
            } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
            to="/category"
          >
            Category
          </Link>

          <div
            className="absolute h-[500px] hidden delay-700  transition-all space-y-2 text-gray-800 rounded-md shadow-md z-20 group-hover:block"
            style={{ transitionDuration: "30s",transitionDelay:"1s"}}
          >
            <div className="w-[300px] lg:w-[800px] text-[15px]  -ml-20 lg:-ml-[400px] mt-6 shadow-2xl bg-white z-10 p-5 category-parent group-hover:flex flex-wrap justify-around ">

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2">
                <h4
                  className="pb-2"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Fruits & vagetable
                </h4>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Fresh Fruits
                </Link>
                <Link
                  className="text-black no-underline hover:text-primary"
                  to="/"
                >
                  Fresh Vegatables
                </Link>
              </div>

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
                <h4
                  className="pb-2"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Meat & Fish
                </h4>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Frozen Fish
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Meat
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Dried Fish
                </Link>
              </div>

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
                <h4
                  className="pb-2 "
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Cooking
                </h4>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Spices
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Salt Sugar
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Rice
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Dal or Lantil
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Ready Mix
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Oil
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Ghee
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Shemai & Suji
                </Link>
              </div>

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black tree-product hover:text-primary no-underline" to="/">Tree</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
                </div> 

              <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black hover:text-primary no-underline" to="/">Tree</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
                </div>
               <Link className="no-underline" to="/category">
               <ColorButton className="flex h-8 w-32 justify-center items-center text-xs ">
                  More Category <SendOutlined />
                  </ColorButton>
               </Link>

            </div>

           
          </div>
        </div>
      </div>
    </li>
  );

  
                {/* --------------------------------------- */}

              {/* <div className=" -mt-3 flex flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted green"}}>Home & Cleaning</h4>
                  <Link className="text-black no-underline" to="/">Dishwashing Supplies</Link>
                  <Link className="text-black no-underline" to="/">Lundary</Link>
                  <Link className="text-black no-underline" to="/">Cleaning Accessories</Link>
                  <Link className="text-black no-underline" to="/">Floor & Glass cleaner</Link>
                  <Link className="text-black no-underline" to="/">Toilet Cleaner</Link>
                  <Link className="text-black no-underline" to="/">Trash Bin & Basket</Link>
                </div> */}
              {/* <div className=" -mt-3 flex flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted green"}}>Health Products</h4>
                  <Link className="text-black no-underline" to="/">Antiseptics</Link>
                  <Link className="text-black no-underline" to="/">Handwash & Handrub</Link>
                  <Link className="text-black no-underline" to="/">Food Supplement</Link>
                  <Link className="text-black no-underline" to="/">Herbal & Digestive Aids</Link>
                </div>
              
   
              {/* <div className=" -mt-3 flex flex-col gap-2 ">
                <h4
                  className="pb-2"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Other Category
                </h4>

               <div>
               <div className="flex absolute overflow-hidden health-product">
                  <Link
                    className="text-black my-5  hover:text-primary no-underline"
                    to="/"
                  >
                    Health Products
                  </Link>

                  <div className="relative overflow-hidden top-10 -right-20 bg-white p-5 rounded">
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                  </div>
                </div>
               </div>

                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Home & cleaning
                </Link>

                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Baby Care
                </Link>

                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Kitchen Appliances
                </Link>
              </div> */}


              {/* <div className=" -mt-3 flex flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted green"}}>Baby Care</h4>
                  <Link className="text-black no-underline" to="/">Diapers</Link>
                  <Link className="text-black no-underline" to="/">Baby Food</Link>
                  <Link className="text-black no-underline" to="/">Baby Skin Care</Link>
                  <Link className="text-black no-underline" to="/">Baby Accessories</Link>
                  <Link className="text-black no-underline" to="/">Wipes</Link>
                </div> */}
              {/* <div className=" -mt-3 flex flex-col gap-2 ">
                <h4>Kitchen Appliances</h4>
                  <Link className="text-black no-underline" to="/">Frozen Fish</Link>
                  <Link className="text-black no-underline" to="/">Meat</Link>
                  <Link className="text-black no-underline" to="/">Dried Fish</Link>
                </div> */}

  return (
    <div className="relative z-50 h-40  w-full overflow-hidden">
      <header className="fixed top-0 left-0 right-0  bg-white shadow-md mb-2 p-2">
        <nav className="flex justify-between p-3 w-[90%] mx-auto">
          <div className="flex items-center">
            <OutletButton
              onClick={showDrawer}
              className="lg:hidden text-2xl h-10 w-10 flex justify-center items-center -ml-5 mr-3 "
            >
              <MenuOutlined />
            </OutletButton>

            <div className="flex items-center">
              <img
                className="w-14 h-12 rounded-full"
                src="https://i.ibb.co/QXHFgbc/icon.png"
              />
              <div>
                <p className="text-sm uppercase font-bold ">Green Harvest</p>
                <p className="text-xs mt-[1px] text-primary font-bold">
                  Super Shop
                </p>
              </div>

              <ul className="hidden lg:flex ml-20">{navMenuItems}</ul>
            </div>
          </div>
          <div className="">
          <div className="flex absolute top-5 left-[1190px] items-center">
            <div className="mr-2 lg:ml-0">
              <CartDrawer />
            </div>

            {accessToken ? (
              <Dropdown menu={{ items: accountItems }} className="">
                <OutletButton className="text-xl h-10 w-10 rounded-full flex justify-center items-center">
                  <UserOutlined />
                </OutletButton>
              </Dropdown>
            ) : (
              <Link className="no-underline -mr-5" to="/login">
                <OutletButton className="w-24 h-10 flex justify-center items-center rounded-lg text-lg">
                  <LoginOutlined />
                  Login
                </OutletButton>
              </Link>
            )}
          </div>
          </div>
        </nav>
        <nav className="">
          {/* navbar items drawer sm device */}
          <Drawer
            placement="left"
            title={closedButton}
            open={open}
            closable={false}
          >
            <div style={{borderBottom:"1px solid green"}}>
              <p>Hellow</p>
            </div>
            {navMenuItems}

            <Submenu />
          </Drawer>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
