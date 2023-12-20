/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Avatar, Layout, Menu } from "antd";
import {UserOutlined} from "@ant-design/icons";


import {
  LeftSquareOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import { getUserInfo } from "../../utils/auth.Services";
import { sidebarItems } from "./SidebarItems";
import { useGetSingleUserQuery } from "../../redux/api/userApi";
import Loading from "../../pages/Shared/loading/Loading";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const userInfo = getUserInfo()
    //@ts-ignore
    const id = userInfo?._id as string
    
    const {data, isLoading}= useGetSingleUserQuery(id);

    if(isLoading){
        return <Loading />
    }
    const image = data?.data?.userImage;

  const { role } = getUserInfo() as any;
  return (
    <Sider
      className="bg-white text-black"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={230}
      collapsedWidth={70}
      theme="light"
      trigger={
        <div className="trigger text-3xl ">
          {collapsed ? <RightSquareOutlined /> : <LeftSquareOutlined />}
        </div>
      }
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {!collapsed && <div className="flex flex-col justify-center items-center mt-4 -ml-3 mb-2 hidden lg:flex">
                {
                   image ? <img className="" src={image}/> :<Avatar size={100} icon={<UserOutlined />} />
                   
                }
                <p className="mt-2 text-lg">{data?.data?.name}</p>
            </div>}
      <Menu
      className="mt-7"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
