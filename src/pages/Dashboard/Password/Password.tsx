import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import ColorButton from "../../../components/button/ColorButton";


type IFormProps = {
    password:string
}

const onSubmit: SubmitHandler<IFormProps> = async (data: any) => {

    try{
 console.log(data, 'updated data..');
    }catch(error){
     console.log(error);
    }
   };

const Password = () => {
    return (
        <div className="w-full lg:w-[30%] mx-auto">

            <div>
                <h2 className="text-center mt-5 mb-3">Password Settings</h2>
            </div>
            <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="oldPassword"
                type="password"
                size="middle"
                placeholder="Old Password"
              />
            </div>
            <div>
              <FormInput
                name="newPassword"
                type="password"
                size="middle"
                placeholder="New Password"
              />
            </div>
            <div>
              <FormInput
                name="newPassword"
                type="password"
                size="middle"
                placeholder="New Password"
              />
            </div>
            <ColorButton text="Change Password" className="w-full mt-3"/>
          </Form>
        </div>
    );
};

export default Password;