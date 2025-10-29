import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import todoList from "./data";

export default function App() {
  const [todos, setTodos] = useState(todoList);
  const [priority, setPriority] = useState("Today");

  return (
    <main>
      <div className="container flex justify-center">
        <div className="wrapper flex flex-col gap-3rem full-width">
          <div>
            <em>Todays date</em>
            <h1>🖲️To do app</h1>
          </div>

          <Header priority={priority} todos={todos} />
          <TodoCard todos={todos} heading="Today" />
          <TodoCard todos={todos} heading="Later" />

          <div>
            <em>Last edited on 23rd monday, 02:43pm</em>
          </div>
        </div>
      </div>
    </main>
  );
}
