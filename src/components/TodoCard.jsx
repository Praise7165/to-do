import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

export default function TodoCard({ todos, heading }) {
  /* filter out task given priority */
  const taskList = todos.filter((todo) => todo.pri === heading);

  /* get length of new task list */
  const taskNo = taskList.length;

  /* check if list is empty */
  const emptyList = taskNo < 1;

  return (
    <div className="card-wrapper">
      <CardHeader heading={heading} taskNo={taskNo} />
      <CardContent
        emptyList={emptyList}
        heading={heading}
        taskList={taskList}
      />
    </div>
  );
}
