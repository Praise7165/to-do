export default function Input({ task, handleTaskChange }) {
  return (
    <input
      className="bd-radius-sm pd-in-sm fs-1rem flex-grow full-height ot-none"
      type="text"
      placeholder="Add a new task"
      value={task}
      onChange={(e) => handleTaskChange(e)}
    />
  );
}
