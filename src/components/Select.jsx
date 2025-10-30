export default function Select({ priority, handlePriorityChange }) {
  return (
    <select
      className="bd-radius-sm pd-in-sm fs-1rem full-height ot-none"
      name="day"
      value={priority}
      onChange={(e) => handlePriorityChange(e)}
    >
      <option value="today" key={1}>
        today
      </option>
      <option value="later" key={2}>
        later
      </option>
    </select>
  );
}
