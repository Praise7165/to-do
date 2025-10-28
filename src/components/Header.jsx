import add from "../assets/add.svg";

export default function Header() {
  return (
    <form className="flex items-center gap-sm">
      <Input />
      <Select />
      <Button />
    </form>
  );
}

function Input() {
  return (
    <input
      className="bd-radius-sm pd-in-sm fs-1rem flex-grow"
      type="text"
      placeholder="Add a new task"
      value=""
      onChange=""
    />
  );
}

function Select() {
  return (
    <select
      className="bd-radius-sm pd-in-sm fs-1rem"
      name="day"
      value=""
      onChange=""
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

function Button() {
  return (
    <button className="btn-header bd-radius-sm fs-1rem" type="submit">
      <img src={add} alt="add"></img>
    </button>
  );
}
