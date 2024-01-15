import ProductCart from "../../components/ProductCart/ProductCart";
import { useGetProductQuery } from "../../redux/api/productApi";
import { useAppSelector } from "../../redux/hooks";
import { IProduct } from "../../types/ProductTypes";
import SearchSorting, { IPagination } from "../Shared/Navbar/SearchFiltering";
import Loading from "../Shared/loading/Loading";

const Product = () => {
  
  const { searchTerm, sortBy, sortOrder, page, limit } = useAppSelector(state => state.product);
  const category = '';
  const { data: products, isLoading } = useGetProductQuery({ searchTerm, sortBy, sortOrder , page, limit, category});

  // console.log(products, 'product datas..');

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="lg:text-center mb-2 mt-28">Best Selling Products</h1>

      <div>
        <SearchSorting />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-5">
        {products &&
          products.data.map((product: IProduct) => (
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
