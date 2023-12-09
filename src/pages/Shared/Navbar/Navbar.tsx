import { Avatar, Button, Drawer, Dropdown, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";



const Navbar = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    // const onClose = () => {
    //   setOpen(false);
    // };
    
    const items = [
        {
          key: "1",
          label: (
            <div>
                <div className="flex flex-col">
                  <Button type="text">
                    <Link to={`/profile`}> Profile</Link>
                  </Button>
                  <Button  danger type="text">
                    Log out
                  </Button>
                </div>
            
                <Button type="text">
                  <Link to="/login"> Login</Link>
                </Button>
            </div>
          ),
        },
      ];

    const navMenuItems = (
        <li className="list-none flex flex-col justify-center items-center lg:flex-row">
          <Link
            className="text-black  mt-2 lg:mt-0 lg:mr-3 no-underline "
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-black  mt-2 lg:mt-0 lg:mr-3 no-underline "
            to="/service"
          >
            Contact Us
          </Link>
          <Link
            className="text-black no-underline  mt-2 lg:mt-0 lg:mr-3    "
            to="/contact"
          >
            Our Menu
          </Link>
          <Link
            className="text-black no-underline mt-2 lg:mt-0 lg:mr-3"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-black no-underline mt-2 lg:mt-0 lg:mr-3  "
            to="/booking"
          >
            Our Shop
          </Link>
        </li>
      );


    return (
        <section className="relative z-50 mb-32 w-full">
        <header className="fixed top-0 left-0 right-0  bg-white shadow-md mb-2">
          <nav className="flex justify-between p-3 w-[90%] mx-auto">
            <div className="flex items-center">
              <Button className="lg:hidden mr-3 -ml-4 " onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.ibb.co/863c3CY/car-service-logo.jpg'"
                width={500}
                height={500}
                alt="car service logo"
              />
              <h3 className="text-3xl font-bold text-black p-1">
                Car<span className="text-[#f93e76]">Dev</span>
              </h3>
            </div>
            <div className="flex items-center">
              <ul className="hidden lg:flex">{navMenuItems}</ul>
              <Dropdown menu={{ items }} className="">
                <a className="-ml-10 lg:ml-2">
                  <Space wrap size={24}>
                    <Avatar
                      className="text-[20px] "
                      size="large"
                      icon={<UserOutlined />}
                    />
                  </Space>
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