import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

export default function TodoCard({ todos, heading, handleTaskStatus }) {
  const taskList = todos.filter((todo) => todo.pri === heading);

  /* get length of new task list */
  const taskNo = taskList.length;

  return (
    <div className="card-wrapper">
      <CardHeader heading={heading} taskNo={taskNo} />
      <CardContent
        heading={heading}
        taskList={taskList}
        handleTaskStatus={handleTaskStatus}
      />
    </div>
  );
}
