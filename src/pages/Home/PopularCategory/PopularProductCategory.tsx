import { Link, useParams } from "react-router-dom";
import { categoriesItems } from "../../../constants/CategoriesData";

type ICategoryitemsProps = {
  title: string;
  category: string;
  image: string;
  href: string;
};
const PopularProductCategory = () => {
  const { category } = useParams();

  const filteredItems = categoriesItems.filter(
    (item) => item.category === category
  );

  window.scroll(0, 0);
  return (
    <div className="flex">
      {filteredItems.length < 1 && (
        <div className="flex justify-center items-center">
          <h1 className="">No product Found</h1>
        </div>
      )}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-4 w-full lg:w-[90%] mx-auto" >
     {filteredItems.map((item: ICategoryitemsProps, index: number) => (
        <Link
          to={item.href}
          className=" flex flex-col items-center justify-center text-black no-underline rounded py-4 shadow-lg"
          key={index}
          style={{border:"1px solid #D3D3D3"}}
        >
          <img className="w-56 h-44" src={item.image} alt="category" />
          <p className="mt-1 hover:underline text-gray-700">{item.title}</p>
        </Link>
      ))}
     </div>
    </div>
  );
};

export default PopularProductCategory;
