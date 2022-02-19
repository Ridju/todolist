import React, { useState } from "react";
import {
  Todo,
  useUpdateTodoMutation,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from "./todoApi";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList(props: TodoListProps) {
  return (
    <ul>
      <li className='flex items-center justify-between border border-slate-300 px-3 py-3'>
        <AddTodoItems />
      </li>
      {props.todos &&
        props.todos.map((todo: Todo) => {
          return <TodoItem todo={todo!} />;
        })}
    </ul>
  );
}

interface TodoItemProps {
  todo: Todo;
}

function TodoItem(props: TodoItemProps) {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <li
      className='flex items-center justify-between border border-slate-300 px-3 py-3'
      key={props.todo.id}>
      <p className='pr-6'>{props.todo.todo}</p>
      <div>
        <input
          className='h-4 w-4 accent-teal-700'
          type='checkbox'
          checked={props.todo.done}
          onChange={() => {
            const newTodo = { ...props.todo, done: !props.todo.done };
            updateTodo(newTodo);
          }}
        />
        <button
          className='border-2 rounded border-red-700 px-4 py-1 text-red-700 ml-3 hover:cursor-pointer hover:bg-red-700 hover:text-slate-300'
          onClick={() => deleteTodo(props.todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

interface AddTotoItems {}

function AddTodoItems() {
  const [newTodo, setNewTodo] = useState("");
  const [addTodo] = useAddTodoMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='bg-gray-900 focus:outline-none pb-1 border-b-2 border-slate-300'
          placeholder='Add new Todo...'
        />
        <input
          type='submit'
          value='Add'
          className='border-2 rounded border-teal-700 px-4 py-1 text-teal-700 ml-3 hover:cursor-pointer hover:bg-teal-700 hover:text-slate-300'
        />
      </form>
    </>
  );
}
