import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function InputForm({
  task,
  priority,
  handleTaskChange,
  handlePriorityChange,
  handleAddTask,
}) {
  return (
    <form className="flex items-center gap-sm">
      <Input task={task} handleTaskChange={handleTaskChange} />
      <Select priority={priority} handlePriorityChange={handlePriorityChange} />
      <Button handleAddTask={handleAddTask} />
    </form>
  );
}
