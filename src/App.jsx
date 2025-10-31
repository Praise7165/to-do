import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import todoList from "./data";

export default function App() {
  const [todos, setTodos] = useState(todoList);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("today");

  /* handle task input */
  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  /* handle priority change */
  function handlePriorityChange(e) {
    // setPriority((priority) => priority || "later");
    setPriority(e.target.value);
  }

  /* handle add task button click */
  function handleAddTask(e) {
    e.preventDefault();
    const newItem = {
      pri: priority[0].toLocaleUpperCase() + priority.slice(1),
      task: task[0].toLocaleUpperCase() + task.slice(1).toLocaleLowerCase(),
      completed: false,
      id: Date.now(),
    };

    setTodos((todos) => [...todos, newItem]);

    setTask("");
    setPriority("today");
  }

  return (
    <main>
      <div className="container flex justify-center">
        <div className="wrapper flex flex-col items-stretch gap-3rem full-width">
          <div>
            <em>Todays date</em>
            <h1>🖲️To do app</h1>
          </div>

          <Header
            task={task}
            priority={priority}
            handleTaskChange={handleTaskChange}
            handlePriorityChange={handlePriorityChange}
            handleAddTask={handleAddTask}
          />
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
