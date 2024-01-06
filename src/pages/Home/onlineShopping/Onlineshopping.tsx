const Onlineshopping = () => {
  return (
    <div
      style={{ backgroundColor: "#F2F2F2" }}
      className="flex justify-around items-center my-10"
    >
      <div className="-mt-20">
        <h1>
          Make your online shop easier <br />
          with our mobile app
        </h1>
        <p className="text-lg my-5">
          We offer high-quality films and the best documentary selection, <br />
          and the ability to browse alphabetically and by genre
        </p>

        <div className="flex">
          <img
            className=" mr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
            src="https://i.ibb.co/syKSCFL/play-store.png"
            alt="Shopping Banner"
          />
          <img
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            src="https://i.ibb.co/X4Xr8D1/ios-store.png"
            alt="Shopping Banner"
          />
        </div>
      </div>
      <div>
        <img
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          src="https://i.ibb.co/R64RWDP/shopping-banner.png"
          alt="Shopping Banner"
        />
      </div>
    </div>
  );
};

export default Onlineshopping;
