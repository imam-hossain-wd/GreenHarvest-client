import {
    CarOutlined,
    ShopOutlined,
    ShoppingOutlined,
    GlobalOutlined,
    ReloadOutlined,
    TagOutlined,
  } from "@ant-design/icons";

const WeProvideSection = () => {

    const provideDetails = [
        {
          name: "Best Prices & Offers",
          icon: <ShopOutlined />,
    
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        },
        {
          name: "Wide Assortment",
          icon: <GlobalOutlined />,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
        },
        {
          name: "Easy Returns",
          icon: <ReloadOutlined />,
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
        },
        {
          name: "Free & Next Day Delivery",
          icon: <CarOutlined />,
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..",
        },
        {
          name: "100% Satisfaction Guarantee",
          icon: <ShoppingOutlined />,
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        },
        {
          name: "Great Daily Deals Discount",
          icon: <TagOutlined />,
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..",
        },
      ];
    

    return (
        <div className="mt-10 bg-white">
        <div className="flex justify-center items-center flex-col mb-5">
          <h2 className="mb-2">What We Provide?</h2>
          <p className="text-center mx-5 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-[90%] mx-auto  p-10">
          {provideDetails?.map((details, index) => (
            <div key={index} className="bg-white shadow-xl p-5">
              <div className="flex justify-center flex-col items-center">
              <p className="text-5xl text-primary">{details.icon}</p>
              <h4 className="mb-3 mt-2 ">{details?.name}</h4>
              </div>
              <p className="text-[#696969] leading-snug text-center">
                {details?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default WeProvideSection;