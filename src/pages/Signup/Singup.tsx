/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/InputForm";
import { Link } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { GithubFilled,GoogleCircleFilled } from '@ant-design/icons';





type FormValues = {
  Email: string;
  password: string;
};

const Signup = () => {
  // const router = useRouter();


  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {

      console.log(data, 'datas....');
      // const res = await userLogIn({ ...data }).unwrap();

      // if (res?.accessToken) {
      //   message.success("Login Successful");
      //   storeUserInto({ accessToken: res?.accessToken });
      // }

      // const user = getUserInfo();
   
      // const role: any = user.role;

      // if (user && role) {
      //   router.push(`/${role}/profile`);
      // } else {
      //   console.log("User or role not available for redirection.");
      // }
    } catch (err: any) {
      console.error(err.message);
    }
  };


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
          <p className="text-center mb-2 mb-1">Please Sign up into your account</p>
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
              <Button
                className=" bg-primary w-full h-9"
                type="primary"
                htmlType="submit"
              >
                Sign up
              </Button>
            </div>
            <div className="mt-5 flex justify-center">
              <p className="text-[12px] font-semibold">
                New to CarDev?{" "}
                <Link to="/singup" className="text-red-400 underline">
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
              <Link
                to="/facebook"
                className="text-4xl rounded-full 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mr-5 text-black"
              >
                <GithubFilled />
              </Link>

              <Link
                to="/facebook"
                className="text-4xl rounded-full 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black"
              >
                <GoogleCircleFilled />
              </Link>
            </div> 

        </div>
      </div>
    </div>
  );
};

export default Signup;
