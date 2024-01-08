/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/ban-ts-comment */


import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  UnlockOutlined,
  PlusCircleOutlined,
  ScheduleOutlined,
  ShoppingCartOutlined,
  CreditCardOutlined,
  HeartOutlined,
} from "@ant-design/icons";

//@ts-ignore
const StyledStyledLink = ({ to, color, children }) => (
  <Link to={to} style={{ textDecoration: "none", color: color }}>{children}</Link>
);

// Base sidebar items
const baseSidebarItems = (role:string ,color: string) => [
  {
    label: <StyledStyledLink to={`/dashboard`} color={color}>Dashboard</StyledStyledLink>,
    key: `/dashboard`,
    icon: <DashboardOutlined />,
  },
  {
    label: <StyledStyledLink to={`/dashboard/${role}/account`} color={color}>Account</StyledStyledLink>,
    key: `/dashboard/${role}/account`,
    icon: <UserOutlined />,
  },
  {
    label: <StyledStyledLink to={`/dashboard/${role}/password`} color={color}>Password</StyledStyledLink>,
    key: `/dashboard/${role}/password`,
    icon: <UnlockOutlined />,
  },
  {
    label: <StyledStyledLink to={`/dashboard/${role}/add-product`} color={color}>Add Product</StyledStyledLink>,
    key: `/dashboard/${role}/add-product`,
    icon: <PlusCircleOutlined />,
  },
];

// Sidebar items for users
const userSidebarItems = (role:string,color: string ) => [
  ...baseSidebarItems(role ,color),
  {
    label: <StyledStyledLink to={`/dashboard/${role}/order`} color={color}>Order</StyledStyledLink>,
    icon: <ScheduleOutlined />,
    key: `/dashboard/${role}/booking`,
  },
  {
    label: <StyledStyledLink to={`/dashboard/${role}/cart-item`} color={color}>Cart Item</StyledStyledLink>,
    icon: <ShoppingCartOutlined />,
    key: `/dashboard/${role}/cart-item`,
  },
  {
    label: <StyledStyledLink to={`/dashboard/${role}/payment`} color={color}>Payment</StyledStyledLink>,
    icon: <CreditCardOutlined />,
    key: `/dashboard/${role}/payment`,
  },
  {
    label: <StyledStyledLink to={`/dashboard/${role}/wish-list`} color={color}>Wish List</StyledStyledLink>,
    icon: <HeartOutlined />,
    key: `/dashboard/${role}/wish-list`,
  },
];

// Sidebar items for admins
const adminSidebarItems = (role:string, color: string) => [
  ...baseSidebarItems(role, color),
  {
    label: <StyledStyledLink to={`/${role}/order`} color={color}>Booking</StyledStyledLink>,
    icon: <ScheduleOutlined />,
    key: `/${role}/booking`,
  },
  {
    label: <StyledStyledLink to={`/${role}/cartlist`}color={color}>Cart List</StyledStyledLink>,
    icon: <ShoppingCartOutlined />,
    key: `/${role}/cartlist`,
  },
];

// Export a function to get sidebar items based on role
export const getSidebarItems = (role: string, color: string) => {
  switch (role) {
    case "user":
      return userSidebarItems(role, color);
    case "admin":
      return adminSidebarItems(role, color);
    default:
      return baseSidebarItems(role, color);
  }
};
