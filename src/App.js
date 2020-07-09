import React, { useState } from "react";
import Input from "./components/input";
import List from "./components/list";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { content, id: Math.floor(Math.random() * 1000) }]);
    setContent("");
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  return (
    <div className="container">
      <header>
        <span className="heading">This is what I'm gonna do today</span>
      </header>

      <main>
        <Input
          content={content}
          contentChange={contentChange}
          handleSubmit={handleSubmit}
        />
        <List todos={todos} deleteTodo={deleteTodo} />
      </main>
      <footer>created by Chaitanya Raj</footer>
    </div>
  );
}

export default App;
