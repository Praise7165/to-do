import add from "../assets/add.svg";

export default function Button({ handleAddTask }) {
  return (
    <button
      className="btn-header bd-radius-sm fs-1rem full-height"
      type="submit"
      onClick={(e) => handleAddTask(e)}
    >
      <img src={add} alt="add"></img>
    </button>
  );
}
