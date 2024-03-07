/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {  message } from "antd";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/InputForm";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
// import {  GoogleCircleFilled } from "@ant-design/icons";
import { useLogInUserMutation } from "../../redux/api/authApi";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../../firebase/firebase.config";
import { useAppDispatch } from "../../redux/hooks";
import { setAccessToken } from "../../redux/slice/authSlice";
import { storeUserInto } from "../../utils/auth.Services";
import ColorButton from "../../components/button/ColorButton";

// @ts-ignore
type FormValues = {
  Email: string;
  password: string;
};

const Login = () => {

  // const googleIcon = <GoogleCircleFilled />
  const navigate = useNavigate();
  const [logInUser, { error }] = useLogInUserMutation();

  const dispatch = useAppDispatch()
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await logInUser(data);
        //@ts-ignore
      const token = res?.data?.data?.accessToken
    
      if (token) {
        storeUserInto({ accessToken: token });
        dispatch(setAccessToken(token));
        //@ts-ignore
        // const message = res?.data?.message
        message.success(res?.data?.message);
        navigate(from, { replace: true });
      }
    } catch (error: any) {
      // console.error(error.message);
    }
  };

//   const handleGoogleSignIn = async ()=> {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       console.log(result, 'firebase result');
//       const email = result?.user?.email;
//       const password = result?.user?.uid;
//       console.log(password, 'password');
//       const user = {
//         email,
//         password
//       }
//       const res = await logInUser(user);
//       //@ts-ignore
//       if (res?.data) {
//         //@ts-ignore
//         message.success(res?.data?.message);
//         navigate("/");
//       }
//     } catch (error) {
//       console.error(error);
//     }
// }

  return (
    <div className="bg-white border-2 h-screen border-gray-200">
      <div className="">
  
      <div
          className="w-full lg:w-[30%] mx-auto bg-[#E1F3E4] drop-shadow-2xl p-5 rounded-lg"
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3 className="text-center text-lg  py-1 rounded mx-auto mb-3 ">
            Welcome Back
          </h3>
          <p className="text-center mb-2">
            Please Login into your account
          </p>
          <Form submitHandler={onSubmit}>
            <div className="">
              <div className="mb-3">
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  placeholder="Email"
                />
                
                <span className="text-sm text-red-500 mt-2">{error && 
                //@ts-ignore
                error?.data?.message === "user does not exist" && error?.data?.message }</span>
              </div>

              <div className="mb-5">
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="Strong Password"
                />
                 <span className="text-sm text-red-500 mt-2">{error && 
                 //@ts-ignore
                 error?.data?.message === "Password is incorrect" && error?.data?.message }</span>
              </div>
            </div>
            <div className="flex justify-center">

      <ColorButton  className="text-md h-8 flex justify-center items-center w-full bg-primary"
      type="primary"
      htmlType="submit" >Log In</ColorButton>

            </div>
            <div className="mt-5 flex justify-center">
              <p className="text-[12px] font-semibold">
                New to CarDev?{" "}
                <Link to="/signup" className="text-primary underline">
                  Register
                </Link>
              </p>
            </div>
          </Form>

          {/* <div className="flex justify-center items-center mt-4">
            <hr className="w-28 mr-2 text-[15px]" /> or Sing in with{" "}
            <hr className="ml-2 w-28" />
          </div>
          <div className="mt-5 flex justify-center ">
          
       <ColorButton  onClick={handleGoogleSignIn} 
      className="text-2xl h-8 flex justify-center items-center w-full"
      type="primary"
      htmlType="submit">{googleIcon}</ColorButton>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
