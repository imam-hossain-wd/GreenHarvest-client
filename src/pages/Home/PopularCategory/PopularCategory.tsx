/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { IProductProps } from "../../../types/ProductTypes";

const PopularCategory = ({ size }: { size: string }) => {
  window.scroll(0, 0);
  const products: IProductProps[] = [
    {
      name: "Fruits & Vegatables",
      image: "https://i.ibb.co/vmnyYS7/vegatable-fruits.png",
      href: "fruit-vegetable",
    },
    {
      name: "Meat & FIsh",
      image: "https://i.ibb.co/DKNPC7F/fish-meals.png",
      href: "meat-fish",
    },
    {
      name: "Cooking",
      image: "https://i.ibb.co/J3jdRSN/cooking-removebg-preview.png",
      href: "cooking",
    },
    {
      name: "Beverages",
      image: "https://i.ibb.co/c1GVFY0/beverages.png",
      href: "beverages",
    },
    {
      name: "Home & Cleaning",
      image: "https://i.ibb.co/jGNHn3H/home-and-cleaning.png",
      href: "home-cleaning",
    },
    {
      name: "Health Products",
      image: "https://i.ibb.co/LkPnpK4/health-product.png",
      href: "health-product",
    },
    {
      name: "Baby Care",
      image: "https://i.ibb.co/Gn3zYCK/baby-care.png",
      href: "baby-care",
    },
    {
      name: "Kitchen Appliances",
      image: "https://i.ibb.co/x7J29pk/kitchen-applies.png",
      href: "kitchen-appliances",
    },
  ];

  return (
    <div className=" w-[90%] mb-10 lg:w-[90%] flex flex-col justify-center items-center mx-auto">
      <h3 className="text-center mb-5">Popular Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
        {products.map((product: IProductProps, index: number) => (
          <Link
            to={`/category/${product.href}`}
            key={index}
            className={`${
              size === "small" ? "h-16 " : "h-44 w-full lg:w-72 flex-col"
            } no-underline rounded-lg px-2 py-1 flex  justify-center  items-center bg-primary text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300`}
          >
            <div className="overflow-hidden flex justify-center items-center">
              <img
                className={`${
                  size === "small" ? "w-18 h-12" : "w-40 h-28"
                } 'rounded  font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'`}
                src={product?.image}
              />
            </div>
            <div
              className={`${
                size === "large" ? "mt-3" : ""
              } flex justify-center items-center`}
            >
              <p className="ml-2">{product.name}</p>
              <svg
                className="w-3 ml-3 text-white  front-bold  borobazar-rtl-rotate"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path
                  d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
                ></path>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
