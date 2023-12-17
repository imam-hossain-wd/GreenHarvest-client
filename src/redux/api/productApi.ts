import { baseApi } from "./baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
        query: () => '/products',
      }),
 
  }),
});

export const {
  useGetProductQuery
} = productApi;