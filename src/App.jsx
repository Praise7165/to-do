import "./App.css";
import { useState } from "react";
import InputForm from "./components/InputForm";
import TodoCard from "./components/TodoCard";
import todoList from "./data";

export default function App() {
  const [todos, setTodos] = useState(todoList);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("today");
  const [sort, setSort] = useState(true);

  /* time related stuff out of this file tomorrow */
  const dateTime = new Date();
  let todaysDate = dateTime.toDateString().split(" ");
  let todaysTime = dateTime.toLocaleTimeString().split(" ");

  const [day, month, date, year] = todaysDate;
  let [time, media] = todaysTime;
  time = time.slice(0, -3);

  todaysDate = `{ ${day}, ${month} ${date}, ${year} }`;
  todaysTime = `${time} ${media}`;

  /* function to sort todo list */
  function sortTodos() {
    setTodos((todos) => [...todos].sort((a, b) => a.completed - b.completed));
  }

  function reset() {
    setTask("");
    setPriority("today");
  }

  function updateEditTime() {}

  /* sort todo list immediately on first render */
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
    // setPriority((priority) => priority || "later");
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

    /* reset and sort */
    reset();
    setTimeout(sortTodos, 500);
  }

  /* handle toggle task */
  function handleTaskStatus(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
      })
    );

    setTimeout(sortTodos, 1000);
  }

  return (
    <main>
      <div className="container flex justify-center">
        <div className="wrapper flex flex-col items-stretch gap-3rem full-width">
          <Header todaysDate={todaysDate} />
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
            handleTaskStatus={handleTaskStatus}
          />
          <TodoCard
            todos={todos}
            heading="Later"
            handleTaskStatus={handleTaskStatus}
          />

          <Footer sort={sort} />
        </div>
      </div>
    </main>
  );
}

function Header({ todaysDate }) {
  return (
    <div className="flex flex-col items-center">
      <code>{todaysDate}</code>
      <h1>🖲️To do app</h1>
    </div>
  );
}

function Footer({ sort }) {
  return (
    <div className="flex flex-col items-center">
      {sort && <code>Last edited on 23rd monday, 02:43pm</code>}
    </div>
  );
}
