import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [action, setAction] = useState("");
  const [day, setDay] = useState("today");
  const [todo, setTodo] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

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
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
            todo={todo}
            handleClick={handleClick}
            deleteItem={deleteItem}
            deleteId={deleteId}
          />
          <Card
            day="later"
            todo={todo}
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

/*
let todoList = [
  { pri: "today", action: "Go to school", completed: true, id: 1 },
  { pri: "later", action: "Clean kitchen", completed: false, id: 2 },
  { pri: "today", action: "Wear clothes", completed: false, id: 3 },
  { pri: "later", action: "Cook rice", completed: true, id: 4 },
  { pri: "today", action: "Move back home", completed: false, id: 5 },
  { pri: "today", action: "Learn Javascript", completed: false, id: 9 },
  { pri: "today", action: "Resolve issue at bank", completed: false, id: 8 },
  { pri: "today", action: "Wake up by 4am", completed: false, id: 7 },
  { pri: "later", action: "Visit vegas", completed: false, id: 6 },
];
*/
