import { useEffect } from "react";
import ProductCart from "../../components/ProductCart/ProductCart";
import { useGetProductQuery } from "../../redux/api/productApi";
import { useAppDispatch } from "../../redux/hooks";
import { IProduct } from "../../types/ProductTypes";
import SearchFiltering from "../Shared/searchFiltering/SearchFiltering";
import { IPagination } from "../Shared/searchFiltering/SearchFiltering";
import Loading from "../Shared/loading/Loading";
import { setCategory, setLimit } from "../../redux/slice/productSlice";
import useProductState from "../../hooks/useProductState";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const productState = useProductState();
  window.scroll(0, 0);

  useEffect(() => {
    dispatch(setLimit(12));
    dispatch(setCategory(category as string));
  }, [dispatch, category]);

  const { data, isLoading } = useGetProductQuery(productState);
  const products = data?.data;
  console.log(products, "products");

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="lg:text-center mb-2 capitalize">Category : {category}</h3>

      {products?.length < 1 && (
        <h1 className="text-center text-red-500">No Product found</h1>
      )}
      {products?.length > 10 && (
        <div className="">
          <SearchFiltering />
        </div>
      )}

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

      {products?.length > 10 && (
        <div className="flex justify-end items-center">
          <IPagination />
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
