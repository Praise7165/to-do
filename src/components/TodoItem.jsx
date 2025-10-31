import DragIcon from "./DragIcon";
import TodoTask from "./TodoTask";

export default function TodoItem({ todo, handleTaskStatus }) {
  return (
    <li key={todo.id} className="todo-item flex items-center justofy-stretch">
      <DragIcon />

      <TodoTask todo={todo} handleTaskStatus={handleTaskStatus} />
      {/*<span className="delete-icon">
            <DeleteIcon />
          </span> */}
    </li>
  );
}
