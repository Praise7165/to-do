import DeleteIcon from "./Delete";
import TodoTask from "./TodoTask";

export default function TodoItem({ todo, handleTaskStatus, handleDeleteItem }) {
  return (
    <li key={todo.id} className="todo-item flex items-center justofy-stretch">
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
