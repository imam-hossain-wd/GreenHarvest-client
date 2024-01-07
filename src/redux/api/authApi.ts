import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ( data ) => ({
        url: `/auth/signup`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    logInUser: builder.mutation({
      query: ( data ) => ({
        url: `/auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    changePassword: builder.mutation({
      query: ( data ) => ({
        url: `/auth/change-password`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
    useCreateUserMutation,
    useChangePasswordMutation,
    useLogInUserMutation
} = authApi;