import TodoItem from "./TodoItem";

export default function TodoList({
  taskList,
  selected,
  handleTaskStatus,
  handleDeleteItem,
}) {
  return (
    <ul className="flex flex-col gap-md">
      {taskList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          selected={selected}
          handleTaskStatus={handleTaskStatus}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
}
