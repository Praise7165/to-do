import EmptyIcon from "./EmptyIcon";

export default function EmptyMessage({ heading }) {
  return (
    <div className="empty-message flex flex-col items-center gap-1rem">
      <span>
        <EmptyIcon />
      </span>
      <p>Your todo for {heading} is empty</p>
      {/* <ButtonCard /> */}
    </div>
  );
}
