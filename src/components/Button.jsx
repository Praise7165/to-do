import add from "../assets/add.svg";

export default function Button() {
  return (
    <button
      className="btn-header bd-radius-sm fs-1rem full-height"
      type="submit"
    >
      <img src={add} alt="add"></img>
    </button>
  );
}
