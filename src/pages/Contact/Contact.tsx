import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/InputForm";
import FormTextArea from "../../components/Forms/FormTextArea";
import ColorButton from "../../components/button/ColorButton";
import emailjs from '@emailjs/browser';




interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, message, name, phone, subject }= data;

    const userMessage = {
      name,
      email, 
      phone,
      message,
      subject
    }

    try {
      const serviceID = import.meta.env.VITE_serviceID;
    const templateID = import.meta.env.VITE_templateID;
    const publicKey = import.meta.env.VITE_publicKey;
  
    const result = await emailjs.send(serviceID, templateID, userMessage, publicKey);
    if(result?.status === 200){
      alert("Send Message Successfully")
    }

    } catch (error) {
      console.error("Error creating user:", error);
    }
  };


  const ContactDetails = [
    {
      title: "Contact On Phone",
      icons: <PhoneOutlined />,
      info: "01624243747",
    },
    {
      title: "Contact on Email",
      icons: <MailOutlined />,
      info: "imamhossain6t9@gmail.com",
    },
    {
      title: "Contact Address",
      icons: <EnvironmentOutlined />,
      info: "Kaptai Road Modunaghat, Hathazari , Chattogram",
    },
  ];
  return (
    <div className="mt-28 mb-10">
      {/* contact information */}
      <div className="flex">
        {ContactDetails?.map((details, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-full items-center text-center"
          >
            <p className="text-primary text-5xl mb-2">{details?.icons}</p>
            <h3>{details?.title}</h3>
            <p className="w-60 text-lg mt-2">{details?.info}</p>
          </div>
        ))}
      </div>

      {/* map */}

      <div className="google-map-code w-[80%] mx-auto mt-10">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width={1000}
          height={450}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden={false}
          tabIndex={0}
        ></iframe>
      </div>

      <div className="w-[80%] mx-auto bg-white shadow-2xl rounded mt-5 p-5">
        <Form  submitHandler={onSubmit}>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1">
            <div className="mb-3">
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Your Name"
                placeholder=" Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Your Email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3">
              <FormInput
                name="phone"
                type="text"
                size="large"
                label="Phone"
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
            <div className="mb-3">
              <FormTextArea
                name="message"
                label="Message"
                placeholder="Message"
              />
            </div>
          </div>
          <div className="flex justify-center items-enter mt-10">
            <ColorButton htmlType="submit" className="text-lg w-48 h-10">
              <MessageOutlined /> Send Message
            </ColorButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
