import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/product/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.product],
    }),

    getProduct: builder.query({
      query: ({ searchTerm = "", sortBy = "name", sortOrder = "asc" }) =>
        `/product/?searchTerm=${searchTerm}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    }),
    getSingleProduct: builder.query({
      query: (id: string) => `/product/${id}`,
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useGetSingleProductQuery,
} = productApi;
