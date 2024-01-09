/* eslint-disable */


import { Navigate, useLocation } from "react-router";
import { getUserInfo } from "../utils/auth.Services";
import { useGetSingleUserQuery } from "../redux/api/userApi";
import Loading from "../pages/Shared/loading/Loading";


const PrivateRoute = ({ children }:{children: React.ReactNode}) => {
    const userInfo  = getUserInfo();
  //@ts-ignore
    const {data:user, isLoading}= useGetSingleUserQuery(userInfo?._id);
    const location = useLocation();

    if(isLoading){
        return <Loading />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;