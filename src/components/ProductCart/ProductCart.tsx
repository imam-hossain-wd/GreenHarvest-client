/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useAppDispatch} from "../../redux/hooks";
import { addToCart } from "../../redux/slice/cartSlice";
import { IProduct } from "../../types/ProductTypes";
import { Link } from "react-router-dom";



const ProductCart = ({ product }:any) => {

  // const cart = useAppSelector((state) => state?.cart);
  // console.log(cart, 'icart');
  console.log(product, 'product product');

  const dispatch = useAppDispatch();

  const addToCartHandler = (product:IProduct) => {
    message.success("Add Product Successfully")
    dispatch(addToCart(product));
  }
  return (
    <div>
      <div className="flex justify-center mb-2 rounded-lg">
        <img
          className="w-72 h-60"
          src="https://greengrocery.com.bd/wp-content/uploads/2023/12/cinnamon-2.jpg"
        />
      </div>

      <div className="flex flex-col justify-center items-center mb-5">
        <Rate disabled defaultValue={5} />;<p className="font-semibold text-lg text-black">{product.name}</p>
        <p className="mt-2 text-xl font-semibold text-primary">$ {product.price}</p>
        <Button
        onClick={()=> addToCartHandler(product)}
        className="text-primary border-primary hover:bg-primary hover:text-white w-36 font-semibold h-10 flex justify-center items-center mt-2">
          {" "}
          <span className="mr-2 text-xl">
            <ShoppingCartOutlined />
          </span>
          Add To cart{" "}
        </Button>
        <Button
        className="text-primary border-primary hover:bg-primary hover:text-white w-36 font-semibold h-10 flex justify-center items-center mt-2">
          {" "}
      <Link to={`/product/${product?._id}`}>Details</Link>
        </Button>

      </div>
    </div>
  );
};

export default ProductCart;
