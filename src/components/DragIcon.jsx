// import svg as react component so that i can also style it.
// import MyIcon from "../assets/drag.svg?react";

const DragIcon = () => {
  return (
    <svg
      className="drag-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M10.4 10.9L8.00001 13.3L5.60001 10.9M5.60001 6.1L8.00001 3.7L10.4 6.1"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DragIcon;
