/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import { useGetSingleUserQuery } from "../../../redux/api/userApi";
import { getUserInfo } from "../../../utils/auth.Services";
import Loading from "../../Shared/loading/Loading";
import { UserOutlined, InstagramOutlined,LinkedinOutlined,WhatsAppOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import ColorButton from "../../../components/button/ColorButton";

const Account = () => {
  const userInfo = getUserInfo();
  //@ts-ignore
  const id = userInfo?._id as string;

  const { data, isLoading } = useGetSingleUserQuery(id);

  if (isLoading) {
    return <Loading />;
  }
  const { name, email, role } = data && data?.data;

  const image = data?.data?.userImage;

//   console.log(data, "user");

  const onSubmit: SubmitHandler<any> = async (data: any) => {

   try{
console.log(data, 'updated data..');
   }catch(error){
    console.log(error);
   }
  };

  return (
    <div className="w-4/6 mx-auto border-2 border-gray-300 p-5">
      <h2 className="text-center mb-3 capitalize mt-3">{`${role} Profile`}</h2>

      <div className=" flex justify-center flex-col items-center">
        <div className="">
          {image ? (
            <img src={image} />
          ) : (
            <Avatar size={120} icon={<UserOutlined />} />
          )}
        </div>

        <div className="flex my-3">
            <div className="text-3xl text-primary hover:text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-primary">
            <WhatsAppOutlined />
            </div>
            <div className="text-3xl text-sky-700 hover:text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-sky-700 ">
            <LinkedinOutlined />
            </div>
            <div className="text-3xl text-red-500 hover:text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-rose-500">
            <InstagramOutlined />
            </div>
           
          
        </div>

        <div className="w-full lg:w-96">
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="name"
                type="text"
                size="middle"
                defaultValue={name}
                placeholder="Name"
              />
            </div>
            <div>
              <FormInput
                name="email"
                type="text"
                size="middle"
                defaultValue={email}
                placeholder="Email"
              />
            </div>
            <div>
              <FormInput
                name="phone"
                type="number"
                size="middle"
                placeholder="Phone"
              />
            </div>
            <div>
              <FormInput
                name="designation"
                type="text"
                size="middle"
                placeholder="Designation"
              />
            </div>
            <div>
            </div>

            <ColorButton text="update" className="w-full mt-3"/>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Account;
