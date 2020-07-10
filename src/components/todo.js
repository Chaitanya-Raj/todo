import React, { useState } from "react";

const Todo = ({ todo, deleteTodo }) => {
  const [completed, setCompleted] = useState(false);

  const content = () => {
    return completed ? (
      <p className="content completed">
        <strike>{todo.content}</strike>
      </p>
    ) : (
      <p className="content">{todo.content}</p>
    );
  };

  return (
    <li key={todo.id}>
      <button onClick={() => setCompleted(!completed)}>
        <span role="img" aria-label="mark-complete" id="mark-complete">
          &#9989;
        </span>
      </button>
      {content()}
      <button onClick={() => deleteTodo(todo.id)}>
        <span role="img" aria-label="mark-delete" id="mark-delete">
          &#10060;
        </span>
      </button>
    </li>
  );
};

export default Todo;
