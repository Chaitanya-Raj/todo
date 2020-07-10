import React, { useState, useEffect } from "react";
import Input from "./components/input";
import List from "./components/list";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    localStorage.todos ? JSON.parse(localStorage.todos) : []
  );
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== "")
      setTodos([
        ...todos,
        { content, id: Math.floor(Math.random() * 1000), completed: false },
      ]);
    setContent("");
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
        <List todos={todos} setTodos={setTodos} />
      </main>
      <footer>
        made with{" "}
        <span role="img" aria-label="heart" id="heart">
          &#10084;
        </span>{" "}
        by Chaitanya Raj
      </footer>
    </div>
  );
}

export default App;
