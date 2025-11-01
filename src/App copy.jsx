import "./App.css";
import Header from "./components/InputForm";
import Card from "./components/TodoCard";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("today");

  // general todo
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [sortedTodo, setSortedTodo] = useState([]);

  // to disable sorting temporarily
  const [pauseSorting, setPauseSorting] = useState(false);

  // to track deleted item
  const [deleteId, setDeleteId] = useState(null);

  // sort todos whenever main todos array changes (unless paused)
  useEffect(() => {
    if (!pauseSorting) {
      let sortedList = [...todo].sort((a, b) => a.completed - b.completed);

      setSortedTodo(sortedList);
    }

    // store todoList on local storage
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo, pauseSorting]);

  function handleAddItem(item) {
    // we approach setting item this way, so as not to mutate the todo array.
    setTodo((todo) => [item, ...todo]);
  }

  function deleteItem(id) {
    // mark item as being deleted.
    setDeleteId(id);

    setTimeout(() => {
      setTodo((todo) => todo.filter((item) => item.id !== id));
      setDeleteId(null);
    }, 300);
  }

  function handleClick(id) {
    setPauseSorting(true);

    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

    setSortedTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

    setTimeout(() => {
      setPauseSorting(false);
    }, 500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;

    // console.log(action, day);
    const newItem = {
      pri: day.toLocaleLowerCase(),
      task: task[0].toUpperCase() + task.slice(1).toLowerCase(),
      completed: false,
      id: Date.now(),
    };

    handleAddItem(newItem);

    console.log(newItem);

    setTask("");
    setDay("today");
  }

  function handleDayChange(e) {
    e.preventDefault();
    setDay(e.target.value);
  }

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  return (
    <main>
      <div className="container flex justify-center">
        <div className="wrapper flex flex-col">
          <div>
            <h1>🖲️To do app</h1>
            <p>{todaysDate}</p>
          </div>
          <Header
            day={day}
            action={task}
            onDayChange={handleDayChange}
            onActionChange={handleTaskChange}
            onSubmit={handleSubmit}
          />
          <Card
            day="today"
            todo={sortedTodo}
            handleClick={handleClick}
            deleteItem={deleteItem}
            deleteId={deleteId}
          />
          <Card
            day="later"
            todo={sortedTodo}
            handleClick={handleClick}
            deleteItem={deleteItem}
            deleteId={deleteId}
          />

          <div>
            <p>Last edited at {todaysTime}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
