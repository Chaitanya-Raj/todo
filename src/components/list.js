import React from "react";
import { ReactSortable } from "react-sortablejs";
import Todo from "./todo";

const List = ({ todos, setTodos }) => {
  const hide = todos.length === 0 ? { display: "none" } : null;

  const toggleComplete = (id) => {
    let updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.completed = !updatedTodo.completed;
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const updateTodo = (e, id) => {
    console.log(e.target.innerText, id);
    let updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.content = e.target.innerText;
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div>
      <ReactSortable list={todos} setList={setTodos} className="list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleComplete={toggleComplete}
            key={todo.id}
          />
        ))}
      </ReactSortable>
      <div className="list-item" id="clear" style={hide}>
        <span
          className="clear-completed"
          onClick={() => {
            setTodos(todos.filter((todo) => !todo.completed));
          }}
        >
          clear completed
        </span>
      </div>
    </div>
  );
};

export default List;
