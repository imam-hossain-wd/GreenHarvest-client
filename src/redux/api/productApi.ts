import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: ( data ) => ({
        url: `/product/create`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.product],
    }),

    getProduct: builder.query({
        query: () => '/products',
      }),
    getSingleProduct: builder.query({
        query: (id:string) => `/products/${id}`,
      }),
 
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useGetSingleProductQuery
} = productApi;