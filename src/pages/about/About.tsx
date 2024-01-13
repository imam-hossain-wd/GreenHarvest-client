
const AboutPage = () => {

  const provideDetails = [
    {
      name: "Best Prices & Offers",
      image: "https://i.ibb.co/5KX7n04/shopping-removebg-preview.png",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      name: "Wide Assortment",
      image: "https://i.ibb.co/j599Py6/global-removebg-preview.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
    },
    {
      name: "Easy Returns",
      image: "https://i.ibb.co/k0sJrxZ/restore-removebg-preview.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    },
    {
      name: "Free & Next Day Delivery",
      image: "https://i.ibb.co/Tkb435m/vehicle-removebg-preview.png",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..",
    },
    {
      name: "100% Satisfaction Guarantee",
      image: "https://i.ibb.co/S0C1Qpg/store-removebg-preview.png",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      name: "Great Daily Deals Discount",
      image: "https://i.ibb.co/VVqVrfZ/return-removebg-preview.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..",
    },
  ];

  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <img
            className="mt-10 w-full lg:w-[500px] h-[450px]"
            src="https://i.ibb.co/5s4gkj1/about-page-banner.png"
          />
        </div>

        <div className="w-full lg:w-[500px] -mt-10">
          <h1 className="text-orange-500">
            Save more with GO! We give <br /> you the lowest prices on all{" "}
            <br /> your grocery needs.
          </h1>

          <div className="mt-7">
            <h4 className="mb-2 text-lg">Our Vision</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
            </p>
          </div>
          <div className="mt-7">
            <h4 className="mb-2 text-lg">Our Goal</h4>
            <p className="text-sm">
              When looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to using 'Content here, Lorem Ipsum has been the industry's
              standard dummy text ever since.
            </p>
          </div>
        </div>
      </div>

      {/* we provide section */}

      <div className="mt-10">
        <div className="flex justify-center items-center flex-col mb-5">
          <h2 className="mb-2">What We Provide?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="grid grid-cols-3 gap-10 bg-[#EFF7FA] p-10">
          {provideDetails?.map((details, index) => (
            <div key={index} className="">
              <img src={details?.image} className="" />
              <p className="mb-3 mt-2 text-[#0CC5B7]">{details?.name}</p>
              <p className="text-gray-600 text-sm">{details?.description}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default AboutPage;
