import DragIcon from "./DragIcon";
import checkbox from "../assets/checkbox.svg";
import checked from "../assets/checked.svg";

export default function TodoList({ taskList }) {
  return (
    <ul className="flex flex-col gap-md">
      {taskList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  return (
    <li key={todo.id} className="todo-item flex items-center justofy-stretch">
      <span>
        <DragIcon />
      </span>

      <TodoTask todo={todo} />
      {/*<span className="delete-icon">
            <DeleteIcon />
          </span> */}
    </li>
  );
}

function TodoTask({ todo }) {
  return (
    <div className="todo-span flex items-center flex-grow bd-radius-md gap-md">
      <img src={todo.completed ? checked : checkbox}></img>
      <span className="todo-label">{todo.task}</span>
    </div>
  );
}
