import "./App.css";
import { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import TodoCard from "./components/TodoCard";
// import todoList from "./data";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { updateTime } from "./time";

export default function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos"));
  });
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("today");
  const [sort, setSort] = useState(true);
  const [selected, setSelected] = useState(null);
  const [updatedTime, setUpdatedTime] = useState();

  /* function to sort todo list */
  function sortTodos() {
    setTodos((todos) => [...todos].sort((a, b) => a.completed - b.completed));
  }

  function reset() {
    setTask("");
    setPriority("today");
  }

  // sort todo list immediately on first render
  if (sort) {
    sortTodos();
    setSort(false);
  }

  /* handle task input */
  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  /* handle priority change */
  function handlePriorityChange(e) {
    setPriority(e.target.value);
  }

  /* handle add task button click */
  function handleAddTask(e) {
    e.preventDefault();

    if (!task) return;

    const newItem = {
      pri: priority[0].toLocaleUpperCase() + priority.slice(1),
      task: task[0].toLocaleUpperCase() + task.slice(1).toLocaleLowerCase(),
      completed: false,
      id: Date.now(),
    };

    setTodos((todos) => [...todos, newItem]);

    /* reset, sort and update time */
    reset();
    setTimeout(sortTodos, 500);
    setUpdatedTime(updateTime());
  }

  /* handle toggle task */
  function handleTaskStatus(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
      })
    );

    setTimeout(sortTodos, 1000);
    setUpdatedTime(updateTime());
  }

  // delete todo item
  function handleDeleteItem(id) {
    setSelected(id);

    setTimeout(() => {
      setTodos((todos) => todos.filter((item) => item.id !== id));
      setSelected(null);
    }, 300);

    setUpdatedTime(updateTime());
  }

  function handleClearAllTask(pri) {
    setTodos((todos) => todos.filter((item) => item.pri !== pri));
    setUpdatedTime(updateTime());
  }

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <div className="container flex justify-center">
        <div className="wrapper flex flex-col items-stretch gap-3rem full-width">
          <Header />
          <InputForm
            task={task}
            priority={priority}
            handleTaskChange={handleTaskChange}
            handlePriorityChange={handlePriorityChange}
            handleAddTask={handleAddTask}
          />
          <TodoCard
            todos={todos}
            heading="Today"
            selected={selected}
            handleTaskStatus={handleTaskStatus}
            handleDeleteItem={handleDeleteItem}
            handleClear={handleClearAllTask}
          />
          <TodoCard
            todos={todos}
            heading="Later"
            selected={selected}
            handleTaskStatus={handleTaskStatus}
            handleDeleteItem={handleDeleteItem}
            handleClear={handleClearAllTask}
          />

          <Footer time={updatedTime} />
        </div>
      </div>
    </main>
  );
}
