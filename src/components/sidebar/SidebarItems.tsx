import type { MenuProps } from "antd";
import {
//   TableOutlined,
DashboardOutlined,
  ScheduleOutlined,
  ShoppingCartOutlined,
  UnlockOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const sidebarItems = (role: string) => {

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link to={`/${role}/profile`}>Dashboard</Link>,
      key: `/${role}/dashboard`,
      icon: <DashboardOutlined />
    },
    {
      label: <Link to={`/dashboard/${role}/account`}>Account</Link>,
      key: `/${role}/account`,
      icon: <UserOutlined />
    },
    {
      label: <Link to={`/${role}/password`}>Password</Link>,
      key: `/${role}/password`,
      icon: <UnlockOutlined />
    },
  ];



  const UsersSidebarItems: MenuProps["items"] = [
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