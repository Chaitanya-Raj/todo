import React from "react";
import Todo from "./todo";

const List = ({ todos, deleteTodo, toggleComplete }) => {
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
      </ul>
    </div>
  );
};

export default List;
