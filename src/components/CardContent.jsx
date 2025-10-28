import EmptyMessage from "./EmptyMessage";

export default function CardContent({ emptyList, heading }) {
  return (
    <div
      className={`card ${
        emptyList && "empty-card flex items-center justify-center "
      } bd-radius-1rem`}
    >
      {emptyList ? <EmptyMessage heading={heading} /> : <TodoList />}
    </div>
  );
}

function TodoList() {
  return;
}
