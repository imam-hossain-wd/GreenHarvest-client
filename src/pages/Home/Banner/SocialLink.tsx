import { Link } from "react-router-dom";
import {
    WhatsAppOutlined,
    FacebookFilled,
    LinkedinFilled,
    TwitterOutlined,
  } from "@ant-design/icons";

const SocialLink = () => {
    return (
        <div className="flex lg:-ml-24 lg:mt-0 text-2xl w-36 justify-around mr-24 mb-10">
        <Link
          to="https://www.linkedin.com/in/imam-hossain-web-dev/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  text-black duration-300"
        >
          <TwitterOutlined />
        </Link>
        <Link
          to="https://www.linkedin.com/in/imam-hossain-web-dev/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  text-black duration-300"
        >
          <WhatsAppOutlined />
        </Link>
        <Link
          to="https://www.linkedin.com/in/imam-hossain-web-dev/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   text-black duration-300"
        >
          <FacebookFilled />
        </Link>

        <Link
          to=""
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300"
        >
          <LinkedinFilled />
        </Link>
      </div>
    );
};

export default SocialLink;