import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProductReview: builder.mutation({
      query: (data) => ({
        url:'/review/create',
        method:"POST",
        data:data
      }),
      invalidatesTags:[tagTypes.review]
    }),
    getReviews: builder.query({
      query: () => {
        return {
          url: `/review`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useAddProductReviewMutation,
  useGetReviewsQuery
} = reviewApi;




