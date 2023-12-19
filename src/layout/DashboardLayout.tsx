import {  Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import {
    UserOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    CreditCardOutlined
  } from '@ant-design/icons';
const DashboardLayout = () => {

    //dashboard icon
    // <DashboardOutlined />
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className=" flex flex-col text-xl bg-[#E1F3E4] w-40 -mt-8">
        <Link className="no-underline text-black ml-3  mb-2 mt-10 " to="/dashboard/profile"> <UserOutlined className="text-2xl mr-1" /> Profile</Link>
        <Link className="no-underline text-black mb-2 ml-3" to="/dashboard/wishlish"> <HeartOutlined className="text-2xl mr-2" />Wish List</Link>
        <Link className="no-underline text-black mb-2 ml-3" to="/dashboard/booking"><ShoppingCartOutlined className="text-2xl mr-2" />Booking</Link>
        <Link className="no-underline text-black mb-2 ml-3" to="/dashboard/payment"><CreditCardOutlined  className="text-2xl mr-1"/> Payment</Link>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
