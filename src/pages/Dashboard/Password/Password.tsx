/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import ColorButton from "../../../components/button/ColorButton";
import { useChangePasswordMutation } from "../../../redux/api/authApi";
import { getUserInfo } from "../../../utils/auth.Services";
import { message } from "antd";



type IFormProps = {
    password:string
}



const Password = () => {
  const [changePassword, {error}]= useChangePasswordMutation()

  const user = getUserInfo();
  //@ts-ignore
 const email= user?.email as string;


  const onSubmit: SubmitHandler<IFormProps> = async (data: IFormProps) => {
  
 
    try{
//  console.log(data, 'updated data..');
//@ts-ignore
 const {oldPassword,newPassword1} = data
 
//  let newPassword;

//  if(oldPassword){
//   message.error("Please provide previous password")
//  }
//  if(!newPassword1 || !newPassword2){
//   message.error("Please provide New password")
//  }
//  if(newPassword1 && newPassword2){

//   if(newPassword1 !== newPassword2){
//     newPassword=newPassword1
//     message.error("New password is not match")
//   }

//   message.error("Please provide New password")
//  }

 const userPassword = {
  oldPassword, 
  newPassword:newPassword1,
  email
 }
//  console.log(userPassword, 'userPassword');
 const res = await changePassword(userPassword);
 //@ts-ignore
 const result = res?.data;

 if(result?.statusCode === 200){
  message.success(result?.message)
 }

    }catch(error){
     console.log(error);
    }
   };
   if(error){
    //@ts-ignore
    message.error(error?.data?.message)
   }

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
                placeholder="New Password"
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