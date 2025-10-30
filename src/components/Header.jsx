import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function Header() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("today");
  let newItem;

  /* handle task input */
  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  /* handle priority change */
  function handlePriorityChange(e) {
    // setPriority((priority) => priority || "later");
    setPriority(e.target.value);
  }

  /* handle add task button click */
  function handleAddTask(e) {
    e.preventDefault();
    newItem = {
      pri: priority,
      task,
      completed: false,
      id: Date.now(),
    };
  }
  console.log(newItem);

  return (
    <form className="flex items-center gap-sm">
      <Input task={task} handleTaskChange={handleTaskChange} />
      <Select priority={priority} handlePriorityChange={handlePriorityChange} />
      <Button handleAddTask={handleAddTask} />
    </form>
  );
}
