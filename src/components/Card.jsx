import { useState } from "react";
import calendar from "../assets/calendar.svg";
import checkbox from "../assets/checkbox.svg";
import checked from "../assets/checked.svg";
import deleteIcon from "../assets/delete.svg";
import DragIcon from "./DragIcon";

// sort task, so that completed task goes down.
// todoList.sort((a, b) => a.completed - b.completed);

// console.log(todoList);

export default function Card({
  day,
  todo,
  handleClick,
  handleDragEnter,
  handleDragStart,
  handleDrop,
  handleDrag,
  draggingIndex,
  dragY,
  deleteItem,
}) {
  const filterList = (() => {
    return todo
      .sort((a, b) => a.completed - b.completed)
      .filter((item) => item.pri === day);
  })();

  // console.log(todo);
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img src={calendar} alt="Calendar" className="svg-icon"></img>
        <h3>{day}</h3>
        {filterList.length > 0 ? (
          <span className="centered">{filterList.length}</span>
        ) : (
          ""
        )}
      </div>

      <div className={`card ${filterList.length < 1 && "empty-card"}`}>
        {filterList.length < 1 ? (
          <p>Nothing to do? Nice!!</p>
        ) : (
          <TodoList
            day={day}
            todo={todo}
            handleClick={handleClick}
            handleDragEnter={handleDragEnter}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDrag={handleDrag}
            draggingIndex={draggingIndex}
            dragY={dragY}
            deleteItem={deleteItem}
          />
        )}
      </div>
    </div>
  );
}

function TodoList({
  day,
  todo,
  handleClick,
  handleDragEnter,
  handleDragStart,
  handleDrop,
  handleDrag,
  draggingIndex,
  dragY,
  deleteItem,
}) {
  return (
    <ul onDragOver={(e) => e.preventDefault()}>
      {todo.map((item, index) => {
        if (item.pri === day)
          return (
            <li
              key={item.id}
              className={`todo-item ${
                index === draggingIndex ? "dragging" : ""
              }`}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, index)}
              onDrag={(e) => handleDrag(e)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={handleDrop}
              style={
                index === draggingIndex
                  ? { transform: `translateY(${dragY}px)` }
                  : {}
              }
            >
              <DragIcon />
              <img src={deleteIcon} onClick={() => deleteItem(item.id)} />
              <div className="todo-span" onClick={() => handleClick(item.id)}>
                <img src={item.completed ? checked : checkbox}></img>
                <span className="todo-label">{item.action}</span>
              </div>
            </li>
          );
      })}
    </ul>
  );
}

// function ListItem() {}
