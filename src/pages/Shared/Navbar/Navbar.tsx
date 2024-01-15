/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Drawer, Dropdown } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CloseOutlined,
  LoginOutlined,
  MenuOutlined,
  UserOutlined,
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
import SearchSorting from "./SearchFiltering";


const Navbar = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const accessToken = useAppSelector(selectAccessToken);
  const { role } = getUserInfo() as any;

  const showDrawer = () => {
    setOpen(true);
  };

  const items = [
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
    <div className="ml-72 ml-5">
      <OutletButton
        onClick={() => setOpen(!open)}
        className="lg:hidden text-xl h-8 w-8 rounded-full flex justify-center items-center -ml-2 mr-3 "
      >
        <CloseOutlined />
      </OutletButton>
    </div>
  );

  const navMenuItems = (
    <li className="list-none flex flex-col justify-center items-center lg:flex-row">
      <Link
        className=" text-gray-800 hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-gray-800  hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline "
        to="/product"
      >
        Product
      </Link>
      <Link
        className="text-gray-800 hover:text-primary text-base no-underline  mt-2 lg:mt-0 lg:mr-3    "
        to="/contact-us"
      >
        Contact us
      </Link>
      <Link
        className="text-gray-800 hover:text-primary text-base no-underline mt-2 lg:mt-0 lg:mr-3"
        to="/about"
      >
        About
      </Link>
      <Link
        className="text-gray-800 hover:text-primary text-base no-underline mt-2 lg:mt-0 lg:mr-3  "
        to="/booking"
      >
        Our Shop
      </Link>
    </li>
  );



  return (
    <section className="relative z-50 mb-20  w-full overflow-hidden">
      
      <header className="fixed top-0 left-0 right-0  bg-white shadow-md mb-2 p-2">
        {/* upper navbar start */}
  <div>

  </div>

      {/* upper navbar end */}
        <nav className="flex justify-between p-3 w-[90%] mx-auto">
        
          <div className="flex items-center">
            <OutletButton
              onClick={showDrawer}
              className="lg:hidden text-2xl h-10 w-10 flex justify-center items-center -ml-2 mr-3 "
            >
              <MenuOutlined />
            </OutletButton>
            <h3 className="text-2xl text-primary rounded font-bold ">
              Green<span className="">Harvest</span>
            </h3>
          </div>
          <div className="flex items-center items-center">
            <ul className="hidden lg:flex">{navMenuItems}
            

            
            </ul>

            <div className="mr-2 lg:ml-0">
              <CartDrawer />
            </div>

            {accessToken ? (
              <Dropdown menu={{ items }} className="">

                 <OutletButton
              className="text-xl h-10 w-10 text-2xl rounded-full flex justify-center items-center"
            >
              <UserOutlined />
            </OutletButton>
              </Dropdown>
            ) : (
              <Link className="no-underline -mr-5" to="/login">
              <OutletButton
              className="w-24 h-10 flex justify-center items-center rounded-lg text-lg"
            >
                  <LoginOutlined/>
              Login
            </OutletButton>
            </Link>
            )}
          </div>
        </nav>
        <nav>
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
    </section>
  );
};

export default Navbar;
