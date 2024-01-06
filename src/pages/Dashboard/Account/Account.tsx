/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import { useGetSingleUserQuery } from "../../../redux/api/userApi";
import { getUserInfo } from "../../../utils/auth.Services";
import Loading from "../../Shared/loading/Loading";
import { UserOutlined,TwitterOutlined, InstagramOutlined,LinkedinOutlined,WhatsAppOutlined } from "@ant-design/icons";
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
        <div className="flex my-4">
                <span className="text-2xl  border-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300 p-1 text-sky-600  ml-2">
                  <LinkedinOutlined />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 text-primary hover:scale-110  duration-300  ml-2">
                  <WhatsAppOutlined />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300 ml-2 text-red-500">
                  <InstagramOutlined />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300 ml-2 text-sky-500">
                  <TwitterOutlined />
                </span>
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
