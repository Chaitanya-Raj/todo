import React from "react";

const Todo = ({ todo, deleteTodo, toggleComplete }) => {
  const bg = todo.completed ? "darken" : null;
  const strike = todo.completed ? "completed" : null;

  return (
    <div className={`list-item ${bg}`}>
      <button onClick={() => toggleComplete(todo.id)}>
        <span role="img" aria-label="mark-complete" id="mark-complete">
          &#9989;
        </span>
      </button>
      <p className={`content ${strike}`}>{todo.content}</p>
      <button onClick={() => deleteTodo(todo.id)}>
        <span role="img" aria-label="mark-delete" id="mark-delete">
          &#10060;
        </span>
      </button>
    </div>
  );
};

export default Todo;
