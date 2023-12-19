/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productApi";
import Loading from "../Shared/loading/Loading";


const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string);
// console.log(data, 'datas');


if (isLoading) {
  return <Loading />;
}

const {_id, name, description, price ,quantity} = data?.data;

 

  return (
    <div className="mt-20">
      <h1>This is products details page...</h1>
      <div className="flex">
           <div>
            <img src="https://greengrocery.com.bd/wp-content/uploads/2023/12/cinnamon-2.jpg"/>
           </div>
           <div className="text-gray-700 ml-5 text-lg">
            <p className="text-xl font-bold text-black my-3">{name}</p>
            <p className="mb-2">$ {price}</p>
            <p className="mb-2">{description}</p>
            <p className="mb-2">{quantity}</p>
           </div>
      </div>
    </div>
  );
};

export default ProductDetails;
