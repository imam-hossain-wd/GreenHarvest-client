import ProductCart from "../../../components/ProductCart/ProductCart";
import { useGetProductQuery } from "../../../redux/api/productApi";
import { IProduct } from "../../../types/ProductTypes";
import Loading from "../../Shared/loading/Loading";


const Product = () => {

    const {data:products, isLoading}= useGetProductQuery(undefined);
// console.log(products, 'products');
    if ( isLoading) {
        return <Loading />;
      }
    return (
        <div>
            <h1>This is product page..</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-5">
            {
              products &&  products.data.map((product:IProduct) => <ProductCart key={product._id} product={product} />)
            }
            </div>
        </div>
    );
};

export default Product;