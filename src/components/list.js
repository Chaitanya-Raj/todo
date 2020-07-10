import React from "react";
import Todo from "./todo";

const List = ({ todos, deleteTodo, toggleComplete, clearAll }) => {
  const hide = todos.length === 0 ? { display: "none" } : null;
  console.log(todos.length, hide);
  return (
    <div>
      <ul>
        <li id="clear" style={hide}>
          <span className="clear-all" onClick={clearAll}>
            clear all
          </span>
        </li>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
