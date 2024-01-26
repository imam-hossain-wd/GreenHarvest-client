import { useGetProductQuery } from "../../../redux/api/productApi";
import Loading from "../../Shared/loading/Loading";
import ProductSwiper from "../../../components/ProductSwipper/ProductSwipperCart";

const VegatableFruitsCategory = () => {

  const productState = {
    category:"vegetable",
    searchTerm:"",
    sortBy:"",
    sortOrder:"",
    page:1,
    limit:10,
  }

  const { data, isLoading } = useGetProductQuery(productState);
  const products = data?.data;


  if (isLoading) {
    return <Loading />;
  }
  const offer = {
    title:"Fresh Fruits",
    weiver:"2% OFF"
  }

  return (
    <div className="w-[90%] mx-auto">
         <ProductSwiper category="fruit" products={products} offer={offer}/>
    </div>
  );
};

export default VegatableFruitsCategory;
