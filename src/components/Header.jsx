// import svg for img tag
import add from "../assets/add.svg";

function Header({ day, action, onSubmit, onDayChange, onActionChange }) {
  return (
    <form action="" method="get" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={action}
        onChange={onActionChange}
      ></input>
      <select name="day" value={day} onChange={onDayChange}>
        <option value="today" key={1}>
          today
        </option>
        <option value="later" key={2}>
          later
        </option>
      </select>
      <button type="submit">
        <img src={add} alt="add" className="svg-icon"></img>
      </button>
    </form>
  );
}

export default Header;
