/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import ColorButton from "../../../components/button/ColorButton";
import { useChangePasswordMutation } from "../../../redux/api/authApi";
import { message } from "antd";
import { IPasswordProps } from "../../../types/ProductTypes";




const Password = () => {
  const [changePassword]= useChangePasswordMutation()

 const onSubmit: SubmitHandler<IPasswordProps> = async (data) => {
  try {
    // Extracting oldPassword and newPassword1 from form data
    const { oldPassword, newPassword1,newPassword2 } = data;

    if(newPassword1 !== newPassword2){
      message.error("password not match")
    }

    // Constructing userPassword object
    const userPassword = {
      oldPassword,
       newPassword1,
       newPassword2
    };

    // Calling changePassword mutation with userPassword
    const res = await changePassword(userPassword);
    //@ts-ignore
    const result = res?.data?.data;
    if (result?.success === true) {
      message.success(result?.message);
    }else {
      message.error("Something went wrong")
    }
  } catch (error) {
    console.log(error);
  }
};


    return (
        <div className="w-full lg:w-[38%] p-5 h-72 mt-20 mx-auto bg-white shadow-lg">

            <div>
                <h2 className="text-center mt-5 mb-3">Password Settings</h2>
            </div>
            <Form submitHandler={onSubmit}>
            <div className="mb-2">
              <FormInput
                name="oldPassword"
                type="password"
                size="middle"
                placeholder="Old Password"
              />
            </div>
            <div className="mb-2">
              <FormInput
                name="newPassword1"
                type="password"
                size="middle"
                placeholder="New Password"
              />
            </div>
            
            <div className="mb-2">
              <FormInput
                name="newPassword2"
                type="password"
                size="middle"
                placeholder="Confirm Password"
              />
            </div>
            <ColorButton htmlType="submit" className="w-full mt-3">
            Change Password
            </ColorButton>
          </Form>
        </div>
    );
};

export default Password;