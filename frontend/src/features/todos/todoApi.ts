import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

export interface Todo {
  id: number;
  todo: string;
  done: boolean;
  created: string;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/api/todos/",
      providesTags: ["Todos"],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query: (todo: Todo) => ({
        url: `/api/todos/${todo.id}/`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useUpdateTodoMutation } = todoApi;
