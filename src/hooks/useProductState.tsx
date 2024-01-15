// hooks/useProductState.ts

import { useAppSelector } from "../redux/hooks";

const useProductState = () => {
  const productState = useAppSelector(state => state.product);

  return {
    searchTerm: productState.searchTerm,
    sortBy: productState.sortBy,
    sortOrder: productState.sortOrder,
    page: productState.page,
    limit: productState.limit,
    category: productState.category,
  };
};

export default useProductState;
