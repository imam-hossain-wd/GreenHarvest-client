import { contactbanner } from "../../utils/assets";
import OurTeam from "./OurTeam";
import WeProvideSection from "./WeProvideSection";

const AboutPage = () => {

  const {contact,about}=contactbanner;
  return (
    <div className="-mt-20 bg-white">
      <div className="mb-5">
        <img
          className="h-96 w-full"
          src={contact}
        />
        {/* <h2 className="text-center mt-5 text-2xl -ml-10 italic">About us</h2> */}
      </div>
      <div className="flex w-[90%] mt-10 mx-auto flex-col lg:flex-row justify-around items-center">
        <div className="w-full lg:w-[500px] -mt-10">
          <h2 className="text-3xl">
            Save more with GO! We give you the lowest prices on all{" "}
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
            className="rounded-2xl border shadow-md w-full lg:w-[500px] h-[450px]"
            src={about}
          />
        </div>
      </div>
      <WeProvideSection />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
