export function Footer({ time }) {
  return (
    <div className="flex flex-col items-center">
      <code style={{ fontSize: ".75rem" }}>{time}</code>
    </div>
  );
}
