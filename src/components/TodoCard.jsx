import calendar from "../assets/calendar.svg";

export default function TodoCard({ todos, heading }) {
  return (
    <div className="card-wrapper">
      <CardHeader heading={heading} todos={todos} />
    </div>
  );
}

function CardHeader({ todos, heading }) {
  /* filter out task given priority */
  const taskList = todos.filter((todo) => todo.pri === heading);

  /* get length of new task list */
  const taskNo = taskList.length;

  return (
    <div className="card-header">
      <img src={calendar} alt="calendar" />
      <h3>{heading}</h3>

      {taskNo > 0 && <span className="centered">{taskNo}</span>}
    </div>
  );
}
