import ColorButton from "../../../components/button/ColorButton";

type ItmesProps = {
  title: string;
  image: string;
  description: string;
};


const ShopGetMore = () => {
  const items = [
    {
      title: "Shop & Earn Points",
      image: "https://i.ibb.co/cQD6qNF/shop-earn.png",
      description:
        "The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Discover the perks of Egg Club  membership.",
    },
    {
      title: "Amazing Daily Deals",
      image: "https://i.ibb.co/nc1wFc6/amazing-deals.png",
      description:
        "Stock up on your favorite groceries for less with our unbeatable daily deals! Don't miss out - limited stock.",
    },
    {
      title: "Premium Care",
      image: "https://i.ibb.co/cDnf9hj/customer-service.png",
      description:
        "Too busy to place an order or handling order issues no need to worry as we give you option to take premium assistance.",
    },
  ];

  return (
    <div className="my-10">
      <h3 className="my-3 text-center">Shop and Get More</h3>

      <div className="grid w-[85%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mb-3">
        {items.map((items: ItmesProps, index: number) => (
          <div key={index} className="">
            <div className="h-40 rounded-t-xl bg-[#F5F5F5]">
              <div className="px-5 py-6">
                <h3 className="mb-3 text-xl">{items.title}</h3>
                <p className=" w-[100%] h-20 opacity-75">
                  {items.description}
                </p>
              </div>
            </div>

            <div className="overflow-hidden">
              <img className="w-full h-60 rounded-b-xl" src={items.image} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-[90%] lg:w-[85%] mx-auto">
        <img
          className="w-full  h-[300px] lg:h-[450px] rounded"
          src="https://i.ibb.co/7ktxPrd/shopping.png"
          alt=""
        />

        <div className="absolute top-[40%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 text-center w-full  text-white">
          <h3 className="text-3xl lg:text-4xl mt-5 lg:mt-0 lg:w-[50%] mx-auto bg-transparent font-bold mb-4">
            Shop your daily necessities
          </h3>

          <p className="text-lg lg:w-[60%] mx-auto p-2 mb-4">
            Shop from our popular category, Explore special offers and receive
            grocery on your doorsteps within 1 hour.
          </p>

          <ColorButton className="w-36 mx-auto text-md flex justify-center items-center h-9 rounded-full">
            Start Shopping
          </ColorButton>
        </div>
      </div>
    </div>
  );
};

export default ShopGetMore;
