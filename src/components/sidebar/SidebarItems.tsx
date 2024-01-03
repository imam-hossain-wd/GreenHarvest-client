import type { MenuProps } from "antd";
import {
//   TableOutlined,
CreditCardOutlined,
HeartOutlined,
  ScheduleOutlined,
  ShoppingCartOutlined,
  UnlockOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const sidebarItems = (role: string) => {

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link to={`/dashboard/${role}/account`}>Account</Link>,
      key: `/${role}/account`,
      icon: <UserOutlined />
    },
    {
      label: <Link to={`/dashboard/${role}/password`}>Password</Link>,
      key: `/${role}/password`,
      icon: <UnlockOutlined />
    },
  ];



  const UsersSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link to={`/dashboard/${role}/booking`}>Booking</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/booking`,
    },
    {
      label: <Link to={`/dashboard/${role}/cart-item`}>Cart Item</Link>,
      icon: <ShoppingCartOutlined />,
      key: `/${role}/cartlist`,
    },
    {
      label: <Link to={`/dashboard/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/payment`,
    },
    {
      label: <Link to={`/dashboard/${role}/wish-list`}>Wish List</Link>,
      icon: <HeartOutlined />,
      key: `/${role}/wishlist`,
    },
  ];
  const AdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link to={`/${role}/booking`}>Booking</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/booking`,
    },
    {
      label: <Link to={`/${role}/cartlist`}>Cart List</Link>,
      icon: <ShoppingCartOutlined />,
      key: `/${role}/cartlist`,
    }
  ];

  if (role === "admin") return AdminSidebarItems;
  else if (role === "user") return UsersSidebarItems;
  else {
    return defaultSidebarItems;
  }
};