/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Button, message } from "antd";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { GithubFilled, GoogleCircleFilled } from "@ant-design/icons";
import { useCreateUserMutation } from "../../redux/api/authApi";
import { auth, googleProvider, handleSignInClick } from "../../firebase/firebase.config";
import { signInWithPopup } from "firebase/auth";
import MyButton from "../../components/button/Button";
import OutletButton from "../../components/button/Button";
import ColorButton from "../../components/button/ColorButton";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {

  const [createUser, { error }] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const res = await createUser(data);

      if (res?.data) {
        message.success(res?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  if (error) {
    console.log(error?.data?.message, "error");
  }

const handleGoogleSignUp = async ()=> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result?.user, 'result...');
      const name = result?.user?.displayName;
      const email = result?.user?.email;
      const password = result?.user?.uid;
      const user = {
        name, 
        email,password
      }
      console.log(user, 'suser');
      const res = await createUser(user);

      if (res?.data) {
        message.success(res?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
}

  return (
    <div className="bg-white shadow-2xl border-2 border-gray-200 mt-24">
      <div className="flex flex-col lg:flex-row justify-around">
        <div>
          <img
            className="w-96 h-96"
            src="https://i.ibb.co/gMndB2j/loginpage.png"
            alt="login image"
          />
        </div>
        <div
          className="w-full lg:w-[30%] bg-white drop-shadow-2xl p-5 rounded-lg"
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
            Please Sign up into your account
          </p>
          <Form submitHandler={onSubmit}>
            <div className="">
              <div className="mb-3">
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  placeholder="Email"
                />
                <span className="ml-3 text-sm mt-3 text-red-500">
                  {error && error?.data?.message}
                </span>
              </div>

              <div className="mb-5">
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="Strong Password"
                />
              </div>
            </div>
            <div className="flex justify-center">

      <ColorButton className="text-md   h-8 flex justify-center items-center w-full"
      type="primary"
      htmlType="submit" >
        Sign up
      </ColorButton>
            </div>
  
          </Form>

          <div className="flex justify-center items-center mt-4">
            <hr className="w-28 mr-2 text-[15px]" /> or Sing in with{" "}
            <hr className="ml-2 w-28" />
          </div>
          <div className="mt-5 flex justify-center ">
  
      <ColorButton onClick={handleGoogleSignUp} 
      className="text-md h-8 flex justify-center items-center w-full"
      type="primary"
      htmlType="submit" >
        <GoogleCircleFilled />
      </ColorButton>
          </div>
          <div className="mt-5 flex justify-center">
              <p className="text-[12px] font-semibold">
                New to CarDev?{" "}
                <Link to="/login" className="text-primary underline">
                 Login
                </Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
