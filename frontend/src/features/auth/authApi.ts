import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  username: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<void, User>({
      query: (user) => ({
        url: "/login/",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
