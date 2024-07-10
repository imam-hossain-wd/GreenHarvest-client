import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createpaymentIntent: builder.mutation({
      query: ( data ) => ({
        url: "/payment/create-payment-intent",
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.payment],
    }),
    createPayment: builder.mutation({
      query: ( data ) => ({
        url: "/payment/create-payment",
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.payment],
    }),
    getPayment: builder.query({
      query: () => ({
        url: `/payment`,
        method: 'GET',
      }),
      providesTags:[tagTypes.payment]
    }),
  }),
});

export const {
    useCreatepaymentIntentMutation,
    useCreatePaymentMutation,
    useGetPaymentQuery
} = paymentApi;