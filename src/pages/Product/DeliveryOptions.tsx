import { PhoneFilled,LinkedinFilled ,FacebookFilled,WhatsAppOutlined ,TwitterOutlined ,MailFilled} from "@ant-design/icons";
import { Link } from "react-router-dom";

const DeliveryOptions = () => {
  return (
    <div className="ml-10">
      <div className="flex justify-center mb-4">
        <p className="text-xl text-gray-600">Delivery Options</p>
      </div>

      <div>
        <h4 className="mb-2 mt-5">Available Delivery Area : </h4>
        <ul>
          <li className="mb-1">Dhaka</li>
          <li className="mb-1">Chattogram</li>
          <li className="mb-1">Comilla</li>
          <li className="mb-1">Chadpur</li>
          <li className="mb-1">Rajshahi</li>
          <li className="mb-1">Bogora</li>
          <li className="mb-1">Barisal</li>
          <li className="mb-1">Rongpur</li>
        </ul>

        <h4 className="mt-5">Delivery Info</h4>
        <div className="text-gray-600 my-2">
          <p className="mb-2">
            Delivery Time : Same day delivery if ordered by 10.00 PM
          </p>
          <p className="mb-2">Shipping Charge : Tk 50</p>
          <p className="mb-2">Free Shipping Over Order Amount : Tk 199</p>
        </div>
        <h3 className="mt-5">Cash on Delivery Available : </h3>
        <div className="mt-3">
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

        <div className="mt-5">
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
        </div>

       <div>
       <div className="flex flex-col mb-5 border border-top">

        <h4 className="my-5">Contact us </h4>
       <div className="flex mb-2">
            <p className="mr-2">
              <PhoneFilled />
            </p>
            <p>+8801624243747</p>
          </div>

          <div className="flex mb-2">
            <p className="mr-2">
              <MailFilled />  
            </p>
            <p>imamhossain6t9@gmail.com</p>
          </div>
        <div className="flex text-2xl w-40 justify-around -ml-2 mt-1">
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
       </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;
