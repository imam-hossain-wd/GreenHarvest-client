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
import { clearAccessToken, selectAccessToken } from "../../../redux/slice/authSlice";
import {  authKey,  removeUserInfo } from "../../../utils/auth.Services";

const Navbar = () => {

  const dispatch= useAppDispatch()
  const [open, setOpen] = useState(false);
  const accessToken = useAppSelector(selectAccessToken);
  // console.log(accessToken, 'accessToken');
  // const loggedUser = IsUserLoggedIn();
  // console.log(getUserInfo(), 'getUserInfo');

  // console.log(loggedUser, "lggd user");

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
              <Link to={`/profile`}> Profile</Link>
            </Button>
            <Button onClick={()=> {removeUserInfo(authKey); dispatch(clearAccessToken())}} danger type="text">
              Log out
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const closedButton =   <div className="ml-72 ml-5">
    <Button className=" bg-primary hover:bg-white hover:text-primary hover:border-primary rounded-full hover:border text-2xl text-white w-10 h-10 flex justify-center items-center -ml-3 mr-2">
    <CloseOutlined
  className=""
  onClick={() => setOpen(!open)}
/>
  </Button>
  </div> 
  
  

  const navMenuItems = (
    <li className="list-none flex flex-col justify-center items-center lg:flex-row">
      <Link
        className="text-gray-800 hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-gray-800  hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline "
        to="/service"
      >
        Contact us
      </Link>
      <Link
        className="text-gray-800 hover:text-primary text-base no-underline  mt-2 lg:mt-0 lg:mr-3    "
        to="/contact"
      >
        Our Menu
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
    <section className="relative z-50  w-full overflow-hidden">
      <header className="fixed top-0 left-0 right-0  bg-white shadow-md mb-2 p-2">
        <nav className="flex justify-between p-3 w-[90%] mx-auto">
          <div className="flex items-center">
            <Button
              className="lg:hidden bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-2xl text-white w-10 h-10 flex justify-center items-center -ml-3 mr-2"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
            <h3 className="text-2xl text-primary rounded font-bold ">
              Green<span className="">Harvest</span>
            </h3>
          </div>
          <div className="flex items-center">
            <ul className="hidden lg:flex">{navMenuItems}</ul>

            <div className="mr-2 lg:ml-0">
              <CartDrawer />
            </div>

            {accessToken ? (
              <Dropdown menu={{ items }} className="">
                <a className="lg:ml-2">
                  <Button className="bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-2xl text-white w-10 h-10 flex justify-center items-center rounded-full">
                    <UserOutlined />
                  </Button>
                </a>
              </Dropdown>
            ) : (
              <Button className="bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-lg text-white w-24 h-10 flex justify-center items-center rounded-lg ">
                <Link to="/login">
                  {" "}
                  <LoginOutlined className="mr-1"/>
                  Login
                </Link>
              </Button>
            )}
          </div>
        </nav>
        <nav>
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
