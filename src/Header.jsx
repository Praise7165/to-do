import { getDate } from "./time";

export function Header() {
  return (
    <div className="flex flex-col items-center" style={{ fontSize: ".75rem" }}>
      <code>{getDate}</code>
      <h1>🖲️To do app</h1>
    </div>
  );
}
