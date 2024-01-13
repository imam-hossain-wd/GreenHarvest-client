import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Onlineshopping from "../pages/Home/onlineShopping/Onlineshopping";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Onlineshopping />
      <Footer />
    </div>
  );
};

export default MainLayout;
