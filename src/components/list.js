import React from "react";
import Todo from "./todo";

const List = ({ todos, deleteTodo, toggleComplete, clearCompleted }) => {
  const hide = todos.length === 0 ? { display: "none" } : null;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            key={todo.id}
          />
        ))}
        <li id="clear" style={hide}>
          <span className="clear-completed" onClick={clearCompleted}>
            clear completed
          </span>
        </li>
      </ul>
    </div>
  );
};

export default List;
