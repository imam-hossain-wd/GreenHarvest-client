import { Link } from "react-router-dom";
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
              products &&  products.data.map((product:IProduct) => <Link to={`product/${product._id}`} className="border border-primary shadow-lg no-underline" key={product._id}><ProductCart  product={product} /></Link>)
            }
            </div>
        </div>
    );
};

export default Product;