
import { useGetProductQuery } from "../../redux/api/productApi";
import Loading from "../Shared/loading/Loading";
import ProductSwiper from "../../components/ProductSwipper/ProductSwipperCart";


const RelatedProduct = ({category}:{category:string}) => {

const {data, isLoading}= useGetProductQuery({category})
const products = data?.data;

if(isLoading){
    return <Loading />
}
const offer = {
    title:"YOU MAY ALSO LIKE",
    weiver:"3% OFF"
  }
    return (
    <div className="mt-16">
         <ProductSwiper
         category="related"
         offer={offer}
        products={products}
      />
    </div>
    );
    
};

export default RelatedProduct;