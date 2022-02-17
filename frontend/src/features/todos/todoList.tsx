import React, { useState } from "react";
import { Todo, useUpdateTodoMutation } from "./todoApi";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList(props: TodoListProps) {
  return (
    <ul>
      <li></li>
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

  return (
    <li
      className='flex items-center justify-between border border-slate-300 px-3 py-3'
      key={props.todo.id}>
      <p className='pr-6'>{props.todo.todo}</p>
      <input
        className=''
        type='checkbox'
        checked={props.todo.done}
        onChange={() => {
          const newTodo = { ...props.todo, done: !props.todo.done };
          updateTodo(newTodo);
        }}
      />
    </li>
  );
}
