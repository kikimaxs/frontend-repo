import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => `users/${userId}`,
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: "users",
        method: "PUT",
        body: userData,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
