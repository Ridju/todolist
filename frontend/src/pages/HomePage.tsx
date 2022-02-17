import React from "react";
import { useGetTodosQuery } from "../features/todos/todoApi";
import { Header } from "../utils";
import { TodoList } from "../features/todos";

export default function HomePage() {
  const { data } = useGetTodosQuery();
  return (
    <div className='w-full h-full text-white'>
      <Header />
      <main className='w-full h-full flex flex-col justify-start items-center pt-10'>
        <h1 className='font-bold text-3xl p-4 '>Todos</h1>
        <TodoList todos={data!} />
      </main>
    </div>
  );
}
