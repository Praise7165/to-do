import add from "../assets/add.svg";

export default function ButtonHeader() {
  return (
    <button className="btn-card flex items-center" type="submit">
      <img src={add} alt="add" className="svg-icon"></img>
      <span>Add a todo</span>
    </button>
  );
}
