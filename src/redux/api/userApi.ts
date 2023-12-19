
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
        query: () => '/users',
      }),
      getSingleUser: builder.query({
        query: (id:string) => `/users/${id}`,
      }),
  }),
});

export const {
    useGetUsersQuery,
    useGetSingleUserQuery
} = userApi;