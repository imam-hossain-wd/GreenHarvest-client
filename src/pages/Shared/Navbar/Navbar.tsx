import { Button, Drawer, Dropdown} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CloseOutlined,
  LoginOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CartDrawer from "../../../components/Drawer/CartDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
            <Button danger type="text">
              Log out
            </Button>
          </div>
        </div>
      ),
    },
  ];

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
              className="lg:hidden mr-3 -ml-4 bg-primary text-white text-lg w-12 h-9 border-primary "
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

            <Button className="bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-lg text-white w-24 h-10 flex justify-center items-center rounded-lg ">
             <Link to='/login'> <LoginOutlined />
              Login</Link>
            </Button>

            <Dropdown menu={{ items }} className="">
              <a className="lg:ml-2">
                <Button className="bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-2xl text-white w-10 h-10 flex justify-center items-center rounded-full">
                  <UserOutlined />
                </Button>
              </a>
            </Dropdown>
          </div>
        </nav>
        <nav>
          <Drawer
            placement="left"
            title={
              <CloseOutlined
                className="ml-72 ml-5 hover:text-red-500 text-lg transition-all delay-300"
                onClick={() => setOpen(!open)}
              />
            }
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
