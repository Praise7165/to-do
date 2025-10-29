import EmptyMessage from "./EmptyMessage";
import TodoList from "./TodoList";

// import DeleteIcon from "./Delete";

export default function CardContent({ emptyList, heading, taskList }) {
  return (
    <div
      className={`card ${
        emptyList && "empty-card flex items-center justify-center "
      } bd-radius-1rem`}
    >
      {emptyList ? (
        <EmptyMessage heading={heading} />
      ) : (
        <TodoList taskList={taskList} />
      )}
    </div>
  );
}
