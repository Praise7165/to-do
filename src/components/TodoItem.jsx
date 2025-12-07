import { useState } from "react";
import DeleteIcon from "./Delete";
import TodoTask from "./TodoTask";

export default function TodoItem({
  todo,
  selected,
  handleTaskStatus,
  handleDeleteItem,
}) {
  const [draggedId, setDraggedId] = useState(null);

  function handleDragItem(e) {
    const draggedElement = e.target;

    setDraggedId(todo.id);

    e.dataTransfer.setDragImage(draggedElement, 0, 0);
  }

  return (
    <li
      key={todo.id}
      className={`todo-item flex items-center justofy-stretch ${
        todo.id === selected && "swipe"
      } ${draggedId && "dragged"}`}
      draggable="true"
      onDragStart={handleDragItem}
    >
      <TodoTask todo={todo} handleTaskStatus={handleTaskStatus} />

      <span
        className="flex justify-center"
        style={{ flex: "0" }}
        onClick={() => handleDeleteItem(todo.id)}
      >
        <DeleteIcon />
      </span>
    </li>
  );
}
