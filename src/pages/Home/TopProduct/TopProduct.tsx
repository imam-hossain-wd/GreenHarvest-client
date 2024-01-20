import { useGetProductQuery } from "../../../redux/api/productApi";
import Loading from "../../Shared/loading/Loading";

import ProductSwiper from "../../../components/ProductSwipper/ProductSwipperCart";

const TopProduct = () => {
  const product = {
    category: "fish meat",
    searchTerm: "",
    sortBy: "",
    sortOrder: "",
    page: 1,
    limit: 10,
  };
  const { data, isLoading } = useGetProductQuery(product);

  const products = data?.data;

  if (isLoading) {
    return <Loading />;
  }
  const offer = {
    title:"Top Featured Products",
    weiver:"10% OFF"
  }

  return (
    <div className="w-[90%] mx-auto">
      <ProductSwiper category="top" products={products} offer={offer}/>
    </div>
  );
};

export default TopProduct;
  