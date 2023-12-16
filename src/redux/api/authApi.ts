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
  }),
});

export const {
    useCreateUserMutation
} = authApi;