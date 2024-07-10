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
      query: ({
        searchTerm = "",
        sortBy = "",
        sortOrder = "",
        page = 1,
        limit = 10,
        category,
      }) => {
        return {
          url: `/product/?searchTerm=${searchTerm}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}&category=${category}`,
          method: "GET",
          params: searchTerm,
        };
      },
      providesTags: [tagTypes.product],
    }),
    getSingleProduct: builder.query({
      query: (id: string) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.product],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useGetSingleProductQuery,
} = productApi;
