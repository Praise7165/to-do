import TodoItem from "./TodoItem";

export default function TodoList({ taskList, handleTaskStatus }) {
  return (
    <ul className="flex flex-col gap-md">
      {taskList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleTaskStatus={handleTaskStatus}
        />
      ))}
    </ul>
  );
}
