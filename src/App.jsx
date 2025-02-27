import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState, useRef } from "react";

function App() {
  const [action, setAction] = useState("");
  const [day, setDay] = useState("today");
  const [todo, setTodo] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  // stores cursor Y position
  const [dragY, setDragY] = useState(0);
  // useRef is used to reference an element and then work with it method or function directly.
  const dragItem = useRef(null); // item being dragged
  const dragOverItem = useRef(null); // item being hovered on

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

    todo.unshift(newItem);

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

  // function to handle the drag start
  function handleDragStart(e, index) {
    dragItem.current = index;
    setDraggingIndex(index);

    // set initial cursor position
    setDragY(e.clientY);
  }

  function handleDrag(e) {
    if (draggingIndex !== null) setDragY(e.clientY);
  }

  //function to handle dragging over an item
  function handleDragEnter(e, index) {
    dragOverItem.current = index;
  }

  // function to handle dropping the item
  function handleDrop() {
    if (dragItem.current === null || dragOverItem.current === null) return;

    // create a new array with the reordered items
    const updatedTodos = [...todo];
    const draggedItemContent = updatedTodos[dragItem.current];

    // remove the dragged item
    updatedTodos.splice(dragItem.current, 1);

    // insert the item at the new position
    updatedTodos.splice(dragOverItem.current, 0, draggedItemContent);

    // update state with the new order
    setTodo(updatedTodos);

    // reset dragging state
    setDraggingIndex(null);

    // reset refs
    dragItem.current = null;
    dragOverItem.current = null;
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
            handleDragEnter={handleDragEnter}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDrag={handleDrag}
            draggingIndex={draggingIndex}
            dragY={dragY}
          />
          <Card
            day="later"
            todo={todo}
            handleClick={handleClick}
            handleDragEnter={handleDragEnter}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDrag={handleDrag}
            draggingIndex={draggingIndex}
            dragY={dragY}
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
