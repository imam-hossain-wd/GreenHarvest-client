/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { getUserInfo } from "../../../utils/auth.Services";
import { getSidebarItems } from "../../../components/sidebar/SidebarItems";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user: any = getUserInfo();
  const role = user?.role;

  const textColor = "white"
  

  const dashboardItems = getSidebarItems(role, textColor);

  return (
    <div className="">
        <h2 className="capitalize text-center mb-4">{role} Dashboard</h2>
      <div className="w-[95%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 no-underline">
        {dashboardItems?.map((item: any, index: number) => (
          <Link
            to={item?.key}
            className="bg-green-500 rounded no-underline text-white w-60 h-32 flex flex-col justify-center items-center"
            key={index}
          >
            <p className="mb-4 text-4xl">{item.icon}</p>
            <p style={{color:"white"}} className="text-2xl text-white ">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
