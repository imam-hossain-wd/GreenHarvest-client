import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/productApi";
import useProductState from "../../hooks/useProductState";
import Loading from "../Shared/loading/Loading";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import { setCategory } from "../../redux/slice/productSlice";


const CategoryProduct = () => {
    const {category} = useParams();
    const productState = useProductState();
    const dispatch = useAppDispatch();
    console.log(category, 'cccccc');
 

    useEffect(() => {
        if (category) {
            dispatch(setCategory(category)); 
        }
    }, [category, dispatch]);

    const { data, isLoading } = useGetProductQuery(productState);

    const products = data?.data;
    console.log(products, 'category products....');

    if(isLoading){
        return <Loading />
    }

    return (
        <div>
            <h1>This is category Product page</h1>
        </div>
    );
};

export default CategoryProduct;