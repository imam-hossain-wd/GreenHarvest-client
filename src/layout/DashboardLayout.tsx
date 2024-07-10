import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import SideBar from "../components/sidebar/Sidebar";
const DashboardLayout = () => {

  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
