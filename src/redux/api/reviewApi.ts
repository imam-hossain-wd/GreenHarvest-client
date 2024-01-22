import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProductReview: builder.mutation({
      query: (data) => ({
        url: `/review/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    getReviews: builder.query({
        query: () => '/review',
      }),
  }),
});

export const {
  useAddProductReviewMutation,
  useGetReviewsQuery
} = reviewApi;
