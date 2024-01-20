/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productApi";
import Loading from "../Shared/loading/Loading";
import { ShoppingCartOutlined , HeartOutlined } from "@ant-design/icons";
import ColorButton from "../../components/button/ColorButton";
import Review from "../review/Review";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string);
  // console.log(data, 'datas');

  window.scroll(0,0)
  console.log('product details...');
  if (isLoading) {
    return <Loading />;
  }

  const { name, description, price, quantity, image } = data?.data;

  return (
    <div className="my-28  w-[80%] mx-auto">
      <div className="flex justify-between justify-center">
        <div className="flex justify-between justify-center bg-white shadow-xl p-7 rounded">
        <div>
          <img
            className="w-[600px] h-72"
            src={image}
          />
        </div>
        <div className="text-gray-700 ml-5 text-lg">
          <p className="text-xl font-bold text-black my-3">{name}</p>
          <p className="mb-2">$ {price}</p>
          <p className="mb-2">{description}</p>
          <p className="mb-2">{quantity}</p>

        <div className="flex justify-between">
        <div>
            <ColorButton className="font-bold flex text-[17px] w-36 h-10  justify-center items-center">
              <span className="text-xl mr-2">
                <ShoppingCartOutlined />
              </span>
              Add to Cart
            </ColorButton>
          </div>
          <div>
            <ColorButton className="font-bold flex text-[17px] w-36 h-10  justify-center items-center">
              <span className="text-xl mr-2">
              <HeartOutlined />
              </span>
              WishList
            </ColorButton>
          </div>
        </div>

        </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default ProductDetails;
