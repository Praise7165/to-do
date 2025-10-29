import add from "../assets/add.svg";

export default function ButtonHeader() {
  return (
    <button
      className="btn-card flex items-center gap-sm pd-in-1rem pd-bl-1rem bd-radius-md"
      type="submit"
    >
      <img src={add} alt="add" className="svg-icon"></img>
      <span>Add a todo</span>
    </button>
  );
}
