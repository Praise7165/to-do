import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [action, setAction] = useState("");
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
    if (!action) return;

    // console.log(action, day);
    const newItem = {
      pri: day.toLocaleLowerCase(),
      action: action[0].toUpperCase() + action.slice(1).toLowerCase(),
      completed: false,
      id: Date.now(),
    };

    handleAddItem(newItem);

    setAction("");
    setDay("today");
  }

  function handleDayChange(e) {
    e.preventDefault();
    setDay(e.target.value);
  }

  function handleActionChange(e) {
    setAction(e.target.value);
  }

  return (
    <main>
      <div className="container">
        <div className="wrapper">
          <Header
            day={day}
            action={action}
            onDayChange={handleDayChange}
            onActionChange={handleActionChange}
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
        </div>
      </div>
    </main>
  );
}

export default App;
