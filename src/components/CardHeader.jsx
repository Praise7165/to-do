import calendar from "../assets/calendar.svg";

export default function CardHeader({ heading, taskNo, handleClear }) {
  return (
    <div className="flex justify-between">
      <div
        className="flex items-center mg-in-auto"
        style={{ width: "fit-content" }}
      >
        <img src={calendar} alt="calendar" />
        <Heading heading={heading} />
        {taskNo > 0 && <Tag taskNo={taskNo} />}
      </div>
      <button className="btn-clear" onClick={() => handleClear(heading)}>
        Clear all
      </button>
    </div>
  );
}

function Heading({ heading }) {
  return <h3 className="inline-block fs-1sm mg-in-sm">{heading}</h3>;
}

function Tag({ taskNo }) {
  return (
    <strong className="task-no flex items-center justify-center bd-radius-1rem">
      {taskNo}
    </strong>
  );
}
