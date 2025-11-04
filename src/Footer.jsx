import { updateTime } from "./time";

export function Footer() {
  return (
    <div className="flex flex-col items-center">
      <code style={{ fontSize: ".75rem" }}>Last edited on {updateTime}</code>
    </div>
  );
}
