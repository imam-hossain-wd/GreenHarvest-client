import { baseApi } from "./baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
        query: () => '/products',
      }),
    getSingleProduct: builder.query({
        query: (id:string) => `/products/${id}`,
      }),
 
  }),
});

export const {
  useGetProductQuery,
  useGetSingleProductQuery
} = productApi;