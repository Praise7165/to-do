import checkbox from "../assets/checkbox.svg";
import checked from "../assets/checked.svg";

export default function TodoTask({ todo, handleTaskStatus }) {
  return (
    <div
      className={`todo-span flex items-center flex-grow bd-radius-md gap-md
      }`}
    >
      <img
        src={todo.completed ? checked : checkbox}
        onClick={() => handleTaskStatus(todo.id)}
      />
      <span className="todo-label">{todo.task}</span>
    </div>
  );
}
