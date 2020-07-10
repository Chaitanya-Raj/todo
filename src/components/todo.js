import React from "react";

const Todo = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <li>
      <button onClick={() => toggleComplete(todo.id)}>
        <span role="img" aria-label="mark-complete" id="mark-complete">
          &#9989;
        </span>
      </button>
      {todo.completed ? (
        <p className="content completed">
          <strike>{todo.content}</strike>
        </p>
      ) : (
        <p className="content">{todo.content}</p>
      )}
      <button onClick={() => deleteTodo(todo.id)}>
        <span role="img" aria-label="mark-delete" id="mark-delete">
          &#10060;
        </span>
      </button>
    </li>
  );
};

export default Todo;
