import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <li key={todo.id}>
      {todo.content} <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
};

export default Todo;
