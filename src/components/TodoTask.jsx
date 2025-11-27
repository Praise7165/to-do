import { useState } from "react";
import checkbox from "../assets/checkbox.svg";
import checked from "../assets/checked.svg";
import DeleteIcon from "./Delete";

export default function TodoTask({ todo, handleTaskStatus }) {
  const [drag, setDrag] = useState(false);

  const todoStyles = {
    width: "100%",
    position: "relative",
    marginLeft: "0.25rem",
  };

  return (
    <div
      className="flex items-center"
      style={todoStyles}
      onMouseLeave={() => setDrag(false)}
    >
      <div
        className={`todo-span flex items-center flex-grow bd-radius-md gap-md ${
          drag && "move"
        }`}
        onMouseOver={() => setDrag(true)}
      >
        <img
          src={todo.completed ? checked : checkbox}
          onClick={() => handleTaskStatus(todo.id)}
        />
        <span className="todo-label">{todo.task}</span>
      </div>
      <DeleteIcon />
    </div>
  );
}
