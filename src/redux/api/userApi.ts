import { baseApi } from "./baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),

  }),
});

export const {
  useGetUsersQuery
} = productApi;