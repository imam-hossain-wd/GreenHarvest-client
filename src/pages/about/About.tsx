import OurTeam from "./OurTeam";
import WeProvideSection from "./WeProvideSection";

const AboutPage = () => {
  return (
    <div className="mt-32 bg-white">
      <div className="mb-5">
        <img
          className="h-80 w-full"
          src="https://i.ibb.co/3S02ZRs/market-concept-with-vegetables.jpg"
        />
        <h2 className="text-center mt-5 text-2xl -ml-10 italic">About us</h2>
      </div>
      <div className="flex justify-around items-center">
        <div className="w-full lg:w-[500px] -mt-10">
          <h2 className="text-3xl">
            Save more with GO! We give <br /> you the lowest prices on all{" "}
            <br /> your grocery needs.
          </h2>

          <div className="mt-7">
            <h4 className="mb-2 text-lg">Our Vision</h4>
            <p className="text-[#696969] leading-snug">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
            </p>
          </div>
          <div className="mt-7">
            <h4 className="mb-2 text-lg">Our Goal</h4>
            <p className="text-[#696969] leading-snug">
              When looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to using 'Content here, Lorem Ipsum has been the industry's
              standard dummy text ever since.
            </p>
          </div>
        </div>
        <div>
          <img
            className="rounded w-full lg:w-[500px] h-[450px]"
            src="https://i.ibb.co/7RkTqJx/food-cart.jpg"
          />
        </div>
      </div>
      <WeProvideSection />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
