import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";

const Todo = ({ todo, deleteTodo, updateTodo, toggleComplete }) => {
  const bg = todo.completed ? "darken" : null;
  const strike = todo.completed ? "completed" : null;

  const text = useRef(todo.content);

  const handleChange = (evt) => {
    text.current = evt.target.value;
  };

  return (
    <div className={`list-item ${bg}`}>
      <button onClick={() => toggleComplete(todo.id)}>
        <span role="img" aria-label="mark-complete" id="mark-complete">
          &#9989;
        </span>
      </button>
      <ContentEditable
        className={`content ${strike}`}
        html={text.current}
        onBlur={(e) => updateTodo(e, todo.id)}
        onChange={handleChange}
        tagName="p"
        spellCheck="false"
      ></ContentEditable>
      <button onClick={() => deleteTodo(todo.id)}>
        <span role="img" aria-label="mark-delete" id="mark-delete">
          &#10060;
        </span>
      </button>
    </div>
  );
};

export default Todo;
