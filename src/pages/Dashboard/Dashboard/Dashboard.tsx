/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CreditCardOutlined,
    HeartOutlined,
      ScheduleOutlined,
      ShoppingCartOutlined,
      UnlockOutlined,
      UserOutlined,
      DashboardOutlined
    } from "@ant-design/icons";
import { getUserInfo } from "../../../utils/auth.Services";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const user:any = getUserInfo();
    const role = user?.role


    interface IDashboardItemsProps {
        name:string;
         icon: JSX.Element;
    }

    const dashboardItems = [
        {
            name: "Dashboard",
            icon : <DashboardOutlined />,
            href:"/dashboard"
        },
        {
            name: "Account",
            icon : <UserOutlined />,
            href:`/dashboard/${role}/account`
        },
        {
            name: "Password",
            icon : <UnlockOutlined />,
            href:`/dashboard/${role}/password`
        },
        {
            name: "Booking",
            icon : <ScheduleOutlined />,
            href:`/dashboard/${role}/booking`
        },
        {
            name: "Cart Item",
            icon : <ShoppingCartOutlined />,
            href: `/dashboard/${role}/cart-item`
        },
        {
            name: "Payment",
            icon : <CreditCardOutlined />,
            href:`/dashboard/${role}/payment`
        },
        {
            name: "Wish List",
            icon : <HeartOutlined />,
            href: `/dashboard/${role}/wish-list`
        }
    ]
    return (
        <div className="mt-12">

            <div className="w-[95%] mx-auto grid gap-10 grid-cols-4">

                {
                   dashboardItems?.map((item:IDashboardItemsProps, index:number) => (
                    //@ts-ignore
                    <Link to={item?.href} className="bg-green-500 rounded no-underline text-white w-60 h-32 flex flex-col justify-center items-center" key={index}>
                        <p className="mb-4 text-4xl">{item.icon}</p>
                        <p className="text-2xl">{item.name}</p>
                    </Link>
                   )) 
                }
            </div>
        </div>
    );
};

export default Dashboard;