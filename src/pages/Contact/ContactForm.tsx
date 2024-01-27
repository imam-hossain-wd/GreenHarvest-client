import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/InputForm";
import FormTextArea from "../../components/Forms/FormTextArea";
import ColorButton from "../../components/button/ColorButton";
import emailjs from "@emailjs/browser"; 

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, message, name, phone, subject } = data;

    const userMessage = {
      name,
      email,
      phone,
      message,
      subject,
    };

    try {
      const serviceID = import.meta.env.VITE_serviceID;
      const templateID = import.meta.env.VITE_templateID;
      const publicKey = import.meta.env.VITE_publicKey;

      const result = await emailjs.send(
        serviceID,
        templateID,
        userMessage,
        publicKey
      );
      if (result?.status === 200) {
        alert("Send Message Successfully");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const ContactDetails = [
    {
      title: "Office Location",
      icons: <EnvironmentOutlined />,
      info: "Kaptai Road Modunaghat, Hathazari , Chattogram",
    },
    {
      title: " Call us anytime",
      icons: <PhoneOutlined />,
      info: "01624243747",
    },
    {
      title: " Send Mail",
      icons: <MailOutlined />,
      info: "imamhossain6t9@gmail.com",
    },
  ];



  return (
    <div className="mt-32">

<div className="">
<img className="h-80 w-full" src="https://i.ibb.co/3S02ZRs/market-concept-with-vegetables.jpg"/>
<h2 className="text-center mt-5 text-2xl -ml-10 italic">Contact us</h2>
</div>


    <div className=" mb-10 w-full lg:w-[90%] flex flex-col lg:flex-row  bg-white">
   
      <div className="flex flex-col mt-9 ml-5 lg:0 items-center  w-full lg:w-[50%]">
        <div className="mb-10 flex flex-col ">
          <h2 className="my-2">Support is our main priority </h2>

          <p className=" text-[#696969] leading-snug ">
            We created reusable react components, and modern mono repo so <br />
            you can build multiple apps with common components.{" "}
          </p>
        </div>

        <div className="flex flex-col  justify-center items-center -ml-40">
          {ContactDetails?.map((details, index) => (
            <div
              key={index}
              className="flex mb-6 items-center "
              style={{borderBottom:"1px solid #696969"}}
            >
              <p className="text-primary text-4xl mb-2">{details?.icons}</p>
              <div className="ml-5">
                <h4 className="">{details?.title}</h4>
                <p className="w-60 leading-snug text-[16px] text-[#696969] mt-2 mb-2">{details?.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[50%] mx-auto bg-white rounded p-5">
        <Form submitHandler={onSubmit}>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1 p-5">
            <div className="mb-3">
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Full Name"
                placeholder=" Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Email Address"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3">
              <FormInput
                name="phone"
                type="text"
                size="large"
                label="Phone (Optional)"
                placeholder="Enter Your Phone"
              />
            </div>
            <div className="mb-3">
              <FormInput
                name="subject"
                type="text"
                size="large"
                label="Subject"
                placeholder="Give a Suitable Title"
              />
            </div>
          </div>
          <div className="mb-3 -mt-2 px-5">
            <FormTextArea
              name="message"
              label="Message"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-center items-enter mt-7">
            <ColorButton htmlType="submit" className="text-[16px] w-[93%] h-10">
              Submit
            </ColorButton>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
