import {
  FacebookFilled,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      {/* contact info */}

      <div className="flex flex-col lg:flex-row justify-between w-[88%] mx-auto mb-5 border border-top">
        <div className="flex flex-col md:flex-row">
          <div className="flex mr-5">
            <p className="mr-2">
              <PhoneFilled />
            </p>
            <p>+8801624243747</p>
          </div>

          <div className="flex mt-2 lg:mt-0">
            <p className="mr-2">
              <MailFilled />
            </p>
            <p>imamhossain6t9@gmail.com</p>
          </div>
        </div>
        {/* social info */}

        <div className="flex mt-3 lg:mt-0 text-2xl w-40 justify-around mr-24">
          <Link
            to="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black  duration-300"
          >
            <TwitterOutlined />
          </Link>
          <Link
            to=""
            className="transition text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          >
            <WhatsAppOutlined />
          </Link>
          <Link
            to=""
            className="transition text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          >
            <FacebookFilled />
          </Link>
          <Link
            to=""
            className="transition text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          >
            <LinkedinFilled />
          </Link>
        </div>
      </div>
      <hr className="mb-5 w-[95%] mx-auto border-[#C8C8C8]"></hr>

      {/* --------------------------------- */}
      <div className="flex flex-col md:flex-row justify-around">
        <div className="">
          <h4>Categories</h4>
          <p className="mb-2 mt-3">Fruits and Vegetables</p>
          <p className="mb-2">Grocery & Staples </p>
          <p className="mb-2"> Dairy & Eggs</p>
          <p className="mb-2">Beverages </p>
          <p className="mb-2"> Snacks</p>
          <p className="mb-2">Home Care </p>
          <p className="mb-2">Noodles & Sauces </p>
          <p className="mb-2"> More...</p>
          <p className="mb-2"> </p>
        </div>

        <div>
          <h4>Useful Links</h4>
          <p className="mb-2 mt-3">About US</p>
          <p className="mb-2">Featured Products </p>
          <p className="mb-2"> Offers</p>
          <p className="mb-2">Blog</p>
          <p className="mb-2"> Faq</p>
          <p className="mb-2">Careers</p>
          <p className="mb-2">Contact Uses </p>
        </div>

        <div>
          <h4>Top Cities</h4>
          <p className="mb-2 mt-3">Dhaka</p>
          <p className="mb-2">Chattogram</p>
          <p className="mb-2">Comilla</p>
          <p className="mb-2">Chadpur</p>
          <p className="mb-2"> Rajshahi</p>
          <p className="mb-2">Barisal</p>
          <p className="mb-2">Josure</p>
          <p className="mb-2">Kulna</p>
          <p className="mb-2">Rongpur</p>
        </div>

        <div>
          <h4 className="">Download App</h4>

          <div className="mt-2">
            <img
              className="w-28 h-9 mr-2"
              src="https://i.ibb.co/syKSCFL/play-store.png"
              alt="play store"
            />
            <img
              className="w-28 h-9"
              src="https://i.ibb.co/X4Xr8D1/ios-store.png"
              alt="Apple store"
            />
          </div>

          <h4 className="my-3 ">Payment Method</h4>
          <div>
            <img
              className="w-10 h-10 mr-2 rounded"
              src="https://i.ibb.co/zxhNNBn/american-express.png"
              alt="bikash"
            />
            <img
              className="w-10 h-10 mr-2 rounded"
              src="https://i.ibb.co/tMYV3cw/master-card.png"
              alt="american"
            />
            <img
              className="w-10 h-10 mr-2 rounded"
              src="https://i.ibb.co/Th9P4p8/visa-card.png"
              alt="master card"
            />
            <img
              className="w-10 h-10 mr-2 rounded bg-white"
              src="https://i.ibb.co/2SFwtzN/bikash.png"
              alt="visha card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
