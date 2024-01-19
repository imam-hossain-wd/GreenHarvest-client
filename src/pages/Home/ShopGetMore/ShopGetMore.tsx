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
      image: "https://i.ibb.co/C7xKjYR/image.webp",
      description:
        "The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Discover the perks of Egg Club  membership.",
    },
    {
      title: "Amazing Daily Deals",
      image: "https://i.ibb.co/VNTgZGS/daily-Deals-Shop-Info.webp",
      description:
        "Stock up on your favorite groceries for less with our unbeatable daily deals! Don't miss out - limited stock.",
    },
    {
      title: "Premium Care",
      image: "https://i.ibb.co/YDxS5xf/premium-Image.webp",
      description:
        "Too busy to place an order or handling order issues no need to worry as we give you option to take premium assistance.",
    },
  ];

  return (
    <div className="my-10">
      <h3 className="my-3 text-center">Shop and Get More</h3>

      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mb-10">
        {items.map((items: ItmesProps, index: number) => (
          <div key={index} className="">
            <div className="h-44 rounded-t-xl bg-[#F5F5F5]">
              <div className="px-5 py-6">
                <h3 className="mb-3 text-xl">{items.title}</h3>
                <p className=" w-72 h-24 mb-10 opacity-75">
                  {items.description}
                </p>
              </div>
            </div>

            <div className="overflow-hidden ">
              <img className="w-full h-60 rounded-b-xl" src={items.image} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-[80%] mx-auto">
        <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/7Nwh3jt/daily-Grocery.png"
          alt=""
        />

        <div className="absolute top-1/2 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center w-full lg:w-96">
          <h3 className="text-2xl font-bold mb-4">
            Shop your daily necessities
          </h3>

          <p className="text-lg px-3 mb-4">
            Shop from our popular category, Explore special offers and receive
            grocery on your doorsteps within 1 hour.
          </p>

          <ColorButton className="w-36 text-lg h-10">
            Start Shopping
          </ColorButton>
        </div>
      </div>
    </div>
  );
};

export default ShopGetMore;
