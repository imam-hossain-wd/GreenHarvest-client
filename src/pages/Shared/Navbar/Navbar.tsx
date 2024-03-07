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
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,WhatsAppOutlined ,FacebookFilled ,LinkedinFilled
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
import App from "./Modal";



const Navbar = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const accessToken = useAppSelector(selectAccessToken);
  const { role } = getUserInfo() as any;
  const location = useLocation();
  const [showFirstCategory, setShowFirstCategory] = useState(true);
  const [showSecondCategory, setShowSecondCategory] = useState(false);
  
  const handleSliderChanger = ()=> {
    setShowFirstCategory(!showFirstCategory);
    setShowSecondCategory(!showSecondCategory)
  }

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
  <div className="flex justify-between">
    <App />

      <OutletButton
        onClick={() => setOpen(!open)}
        className=" lg:hidden text-xl h-8 w-8 rounded-full flex justify-center items-center mr-3 "
        >
        <CloseOutlined />
      </OutletButton>
        </div>
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


      <div className="relative group">
        <div className="group w-full">
          <Link 
            className={`${
              location.pathname === "/category" ? "text-primary" : ""
            } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline hidden lg:block`}
            to="/category"
          >
            Category
          </Link>

          <div
            className="absolute h-[500px] hidden delay-700  transition-all space-y-2 text-gray-800 rounded-md shadow-md z-20 group-hover:block"
            style={{ transitionDuration: "30s",transitionDelay:"1s"}}
          >
            <div className="w-[300px] lg:w-[800px] text-[15px]  -ml-20 lg:-ml-[400px] mt-6 shadow-2xl bg-white z-10 p-5 category-parent group-hover:flex flex-wrap justify-around ">

             {
              showFirstCategory &&  <div className="grid grid-cols-4">
                <div className="w-44 p-5 -mt-3 flex flex-col gap-2">
                <h4
                  className="pb-2"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Fruits & vagetable
                </h4>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/fruit-vegetable/fruit"
                >
                  Fresh Fruits
                </Link>
                <Link
                  className="text-black no-underline hover:text-primary"
                  to="/category/fruit-vegetable/vegetable"
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
                  to="/category/meat-fish/fish"
                >
                  Frozen Fish
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/meat-fish/meat"
                >
                  Meat
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/meat-fish/dried-fish"
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
                  to="/category/cooking/spices"
                >
                  Spices
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/cooking/salt-sugar"
                >
                  Salt Sugar
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/cooking/rice"
                >
                  Rice
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/cooking/dal-lentil"
                >
                  Dal or Lantil
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/cooking/ready-mix"
                >
                  Ready Mix
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/cooking/oil"
                >
                  Oil
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/cooking/ghee"
                >
                  Ghee
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  to="/category/cooking/shemai-suji"
                >
                  Shemai & Suji
                </Link>
              </div>

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black tree-product hover:text-primary no-underline" to="/category/beverages/tea">Tea</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/category/beverages/coffee">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/category/beverages/soft-drink">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/category/beverages/powder-syrup">Powder Drinks</Link>
                </div> 

              {/* <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black hover:text-primary no-underline" to="/">Tree</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
                </div> */}
               {/* <Link className="no-underline" to="/category"> */}
               <ColorButton onClick={handleSliderChanger} className="flex ml-[600px] h-8 w-32 justify-center items-center text-xs ">
                  More Category <SendOutlined />
                  </ColorButton>
               {/* </Link> */}
              </div>

             }

             {
              showSecondCategory &&  <div className="grid grid-cols-4">
              <div className="w-44 p-5 -mt-3 flex flex-col gap-2">
              <h4
                className="pb-2"
                style={{ borderBottom: "2px dotted #84C225" }}
              >
                Health Product
              </h4>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/health-product/antiseptics"
              >
                Antiseptics
              </Link>
              <Link
                className="text-black no-underline hover:text-primary"
                to="/category/health-product/handwash-handrub"
              >
               Handwash Handrub
              </Link>
              <Link
                className="text-black no-underline hover:text-primary"
                to="/category/health-product/food-supplements"
              >
               Food Supplements
              </Link>
              <Link
                className="text-black no-underline hover:text-primary"
                to="/category/health-product/herbal-digestive-aids"
              >
               Herbal Digestive Aids
              </Link>
            </div>

            <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
              <h4
                className="pb-2"
                style={{ borderBottom: "2px dotted #84C225" }}
              >
                Home & Cleaning
              </h4>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/home-cleaning/dish-wash"
              >
                Dishwashing Supplies
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/home-cleaning/laundry"
              >
                Laundry
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/home-cleaning/cleaning-accessories"
              >
                Cleaning Accessories
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/home-cleaning/floor-Glass-cleaner"
              >
                Floor & Glass Cleaner
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/home-cleaning/toilet-cleaners"
              >
                Toilet Cleaners
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/home-cleaning/trash-bin-basket"
              >
                Trash Bin Basket
              </Link>
            </div>

            <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
              <h4
                className="pb-2 "
                style={{ borderBottom: "2px dotted #84C225" }}
              >
                Baby Care
              </h4>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/baby-care/diapers"
              >
                Diapers
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/baby-care/food"
              >
                Food
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/baby-care/baby-skincare"
              >
                Baby Skincare
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/baby-care/baby-accessories"
              >
                Baby Accessories
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                to="/category/baby-care/wipes"
              >
                Wipes
              </Link>
             
            </div>

            <div className="w-48 p-5 -mt-3 flex flex-col gap-2 ">
              <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Kitchen Appliances</h4>
                <Link className="text-black tree-product hover:text-primary no-underline" to="/">Tree</Link>
                <Link className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                <Link className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                <Link className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
              </div> 

            <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
              <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}></h4>
                <Link className="text-black hover:text-primary no-underline" to="/">Tree</Link>
                <Link className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                <Link className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                <Link className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
              </div>
             <ColorButton onClick={handleSliderChanger} className="flex ml-[600px] h-8 w-32 justify-center items-center text-xs ">
                Previous Category <SendOutlined />
                </ColorButton>
       
            </div>
             }

            </div>
          </div>
        </div>
      </div>
    </li>
  );


  return (
    <div className="relative z-50 h-40  w-full overflow-hidden">
   
      <header className="fixed top-0 left-0 right-0  bg-white shadow-md mb-2 ">
     <div className="flex flex-col lg:flex-row  lg:justify-between bg-primary">
     <div className="flex items-center text-sm p-[6px] text-white ">
      <p className="ml-5"><span><PhoneOutlined /></span> 01624243747</p> <p className="ml-3"> <span><MailOutlined className="mr-2"/></span>imamhossain6t9@gmail.com</p>
      </div>

      <div className="flex ml-5 mb-1 lg:mt-0 text-lg w-28 items-center justify-around mr-24">
          <Link
            to="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="hover:text-black transition ease-in-out delay-150 text-white  duration-300"
          >
            <TwitterOutlined /> 
          </Link>
          <Link 
            to=""
            className="transition ease-in-out delay-150 hover:text-black text-white duration-300"
          >
            <LinkedinFilled />
          </Link>
          <Link
            to="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:text-black text-white duration-300"
          >
            <WhatsAppOutlined />
          </Link>
          <Link
            to="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:text-black text-white duration-300"
          >
            <FacebookFilled />
          </Link>

          
        </div>
     </div>
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
          <div className={`${accessToken ? 'left-[65%] md:left-[70%] lg:left-[85%]' : 'left-[60%] lg:left-[80%]'} p-4 rounded-md flex absolute top-12 md:top-15 lg:top-7 `}>
            <div className="mr-3 lg:ml-0">
              <CartDrawer />
            </div>

            {accessToken ? (
              <Dropdown menu={{ items: accountItems }} className="">
                <OutletButton className="text-xl h-10 w-10 rounded-full flex justify-center items-center">
                  <UserOutlined />
                </OutletButton>
              </Dropdown>
            ) : (
              <Link className="no-underline" to="/login">
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
            {navMenuItems}
          </Drawer>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
