import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../redux/api/productApi";
import Loading from "../../Shared/loading/Loading";
import ProductCart from "../../../components/ProductCart/ProductCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-20">
      <h1>This is products details page...</h1>
      <div className="w-60">
            <ProductCart product={data}/>
      </div>
    </div>
  );
};

export default ProductDetails;
