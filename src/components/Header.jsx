import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function Header() {
  return (
    <form className="flex items-center gap-sm">
      <Input />
      <Select />
      <Button />
    </form>
  );
}
