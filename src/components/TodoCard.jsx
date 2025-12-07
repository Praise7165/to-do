import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

export default function TodoCard({
  todos,
  heading,
  selected,
  handleTaskStatus,
  handleDeleteItem,
  handleClear,
}) {
  const taskList = todos.filter((todo) => todo.pri === heading);

  /* get length of new task list */
  const taskNo = taskList.length;

  return (
    <div className="card-wrapper">
      <CardHeader heading={heading} taskNo={taskNo} handleClear={handleClear} />
      <CardContent
        heading={heading}
        taskList={taskList}
        selected={selected}
        handleTaskStatus={handleTaskStatus}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}
