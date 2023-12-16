/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable padded-blocks */
import { Button, message } from "antd";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import {  GoogleCircleFilled } from "@ant-design/icons";
import { useLogInUserMutation } from "../../redux/api/authApi";
import MyButton from "../../components/button/Button";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase.config";


type FormValues = {
  Email: string;
  password: string;
};

const Login = () => {

  const googleIcon = <GoogleCircleFilled />
  const navigate = useNavigate();

  
  const [logInUser, { error }] = useLogInUserMutation();
  
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await logInUser(data);

      if (res?.data?.data?.accessToken) {
        message.success(res?.data?.message);
        navigate("/");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleGoogleSignIn = async ()=> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result?.user?.email;
      const password = result?.user?.uid;
      const user = {
        email,
        password
      }
      const res = await logInUser(user);
      if (res?.data) {
        message.success(res?.data?.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
}

  return (
    <div className="bg-white border-2 border-gray-200 mt-24">
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
          <p className="text-center mb-2 mb-1">
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
                <span className="text-sm text-red-500 mt-2">{error && error?.data?.message === "user does not exist" && error?.data?.message }</span>
              </div>

              <div className="mb-5">
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="Strong Password"
                />
                 <span className="text-sm text-red-500 mt-2">{error && error?.data?.message === "Password is incorrect" && error?.data?.message }</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className=" bg-primary w-full h-9"
                type="primary"
                htmlType="submit"
              >
                Log In
              </Button>
            </div>
            <div className="mt-5 flex justify-center">
              <p className="text-[12px] font-semibold">
                New to CarDev?{" "}
                <Link to="/signup" className="text-red-400 underline">
                  Register
                </Link>
              </p>
            </div>
          </Form>

          <div className="flex justify-center items-center mt-4">
            <hr className="w-32 mr-2 text-[15px]" /> or Sing in with{" "}
            <hr className="ml-2 w-32" />
          </div>
          <div className="mt-5 flex justify-center ">
          

          <MyButton onClick={handleGoogleSignIn} text={googleIcon}
      className="text-2xl h-8 flex justify-center items-center w-60"
      type="primary"
      htmlType="submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
