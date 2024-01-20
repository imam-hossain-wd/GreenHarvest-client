import { useEffect } from "react";
import ProductCart from "../../components/ProductCart/ProductCart";
import { useGetProductQuery } from "../../redux/api/productApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IProduct } from "../../types/ProductTypes";
import SearchFiltering from "../Shared/Navbar/SearchFiltering";
import  { IPagination } from "../Shared/Navbar/SearchFiltering";
import Loading from "../Shared/loading/Loading";
import { setLimit } from "../../redux/slice/productSlice";


const Product = () => {
  
  const { searchTerm, sortBy, sortOrder, page, limit,category } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch()
  
  useEffect(()=> {
    dispatch(setLimit(12))
  }, [dispatch])
 
  const { data, isLoading } = useGetProductQuery({ searchTerm, sortBy, sortOrder , page, limit, category});
const products = data?.data;


  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="lg:text-center mb-2 mt-28">Best Selling Products</h1>

      <div>
        <SearchFiltering />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto gap-5">
        {products &&
          products.map((product: IProduct) => (
            <div
              className="border border-primary shadow-lg no-underline"
              key={product._id}
            >
              <ProductCart product={product} />
            </div>
          ))}
      </div>

      <div className="flex justify-end items-center">

      <IPagination />
      </div>
    </div>

  );
};

export default Product;
