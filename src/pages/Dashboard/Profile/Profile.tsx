/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useGetSingleUserQuery } from "../../../redux/api/userApi";
import { getUserInfo } from "../../../utils/auth.Services";
import Loading from "../../Shared/loading/Loading";
import {UserOutlined} from "@ant-design/icons";
import { Avatar } from 'antd';


const Profile = () => {
    const userInfo = getUserInfo()
    //@ts-ignore
    const id = userInfo?._id as string
    
    const {data, isLoading}= useGetSingleUserQuery(id);

    if(isLoading){
        return <Loading />
    }
    const {name, email, role}= data && data?.data;

    const image = data?.data?.userImage;

   
    console.log(data, "user");

    return (
        <div className="">
            <h2 className="text-center mb-3">User Profile</h2>

            <div className="w-80 flex flex-col items-center justify-center mx-auto bg-[#E1F3E4] p-5 rounded">
            <div className="">
                {
                   image ? <img src={image}/> :<Avatar size={150} icon={<UserOutlined />} />
                   
                }
            </div>
           <div className="text-lg mt-5 ">
           <p className="mb-1">Name : {name}</p>
            <p className="mb-1">Email : {email}</p>
            <p className="mb-1">role : {role}</p>

           </div>
            </div>

        </div>
    );
};

export default Profile;