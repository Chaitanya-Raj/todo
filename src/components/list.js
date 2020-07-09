import React from "react";
import Todo from "./todo";

const List = ({ todos, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default List;
