import EmptyMessage from "./EmptyMessage";
import TodoList from "./TodoList";

// import DeleteIcon from "./Delete";

export default function CardContent({
  heading,
  taskList,
  selected,
  handleTaskStatus,
  handleDeleteItem,
}) {
  /* check if list is empty */
  const emptyList = taskList.length < 1;

  return (
    <div
      className={`card ${
        emptyList && "empty-card flex items-center justify-center "
      } bd-radius-1rem`}
    >
      {emptyList ? (
        <EmptyMessage heading={heading} />
      ) : (
        <TodoList
          taskList={taskList}
          selected={selected}
          handleTaskStatus={handleTaskStatus}
          handleDeleteItem={handleDeleteItem}
        />
      )}
    </div>
  );
}
