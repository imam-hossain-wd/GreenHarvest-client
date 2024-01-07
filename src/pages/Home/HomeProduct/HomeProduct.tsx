import { Link } from "react-router-dom";
import ProductCart from "../../../components/ProductCart/ProductCart";
import { useGetProductQuery } from "../../../redux/api/productApi";
import { IProduct } from "../../../types/ProductTypes";
import Loading from "../../Shared/loading/Loading";
// import OutletButton from "../../../components/button/Button";
import ColorButton from "../../../components/button/ColorButton";

const HomeProduct = () => {
  const { data: products, isLoading } = useGetProductQuery(undefined);

  console.log(products, "products data");
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="lg:text-center mb-2">Best Selling Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-5">
        {products &&
          products.data.slice(0, 6).map((product: IProduct) => (
            <div
              className="border border-primary shadow-lg no-underline"
              key={product._id}
            >
              <ProductCart product={product} />
            </div>
          ))}
      </div>
      <div className="flex justify-center my-6">
        <Link className="no-underline" to="/product">
         <ColorButton className="w-36 h-9 flex justify-center items-center text-lg font-bold">All Product</ColorButton>
        </Link>
      </div>
    </div>
  );
};

export default HomeProduct;
