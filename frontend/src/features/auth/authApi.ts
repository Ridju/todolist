import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  username: string;
  password: string;
}

export interface UserRegisterInput {
  username: string;
  email: string;
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
        url: "login/",
        method: "POST",
        body: user,
      }),
    }),
    refresh: builder.mutation<void, void>({
      query: () => ({
        url: "refresh/",
        method: "POST",
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "logout/",
        method: "GET",
      }),
    }),
    register: builder.mutation<void, UserRegisterInput>({
      query: (formInput) => ({
        url: "register/",
        method: "POST",
        body: formInput,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
  useRegisterMutation,
} = authApi;
