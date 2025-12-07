import DeleteIcon from "./Delete";
import TodoTask from "./TodoTask";

export default function TodoItem({
  todo,
  selected,
  handleTaskStatus,
  handleDeleteItem,
}) {
  return (
    <li
      key={todo.id}
      className={`todo-item flex items-center justofy-stretch ${
        todo.id === selected && "swipe"
      }`}
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
