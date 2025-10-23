// import { useState } from "react";
import calendar from "../assets/calendar.svg";
import checkbox from "../assets/checkbox.svg";
import checked from "../assets/checked.svg";
import DragIcon from "./DragIcon";
import DeleteIcon from "./Delete";

// sort task, so that completed task goes down.
// todoList.sort((a, b) => a.completed - b.completed);

// console.log(todoList);

export default function Card({ day, todo, handleClick, deleteItem, deleteId }) {
  const filterList = (() => {
    return todo.filter((item) => item.pri === day);
  })();

  // console.log(todo);
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img src={calendar} alt="Calendar" className="svg-icon"></img>
        <h3>{day}</h3>

        {/*
        {filterList.length > 0 ? (
          <span className="centered">{filterList.length}</span>
        ) : (
          ""
        )}
          */}

        {filterList.length > 0 && (
          <span className="centered">{filterList.length}</span>
        )}
      </div>

      <div className={`card ${filterList.length > 0 || "empty-card"}`}>
        {filterList.length > 0 ? (
          <TodoList
            day={day}
            todo={todo}
            handleClick={handleClick}
            deleteItem={deleteItem}
            deleteId={deleteId}
          />
        ) : (
          <p>Nothing to do? Nice!!</p>
        )}
      </div>
    </div>
  );
}

function TodoList({ day, todo, handleClick, deleteItem, deleteId }) {
  return (
    <ul onDragOver={(e) => e.preventDefault()}>
      {todo.map((item) => {
        if (item.pri === day)
          return (
            <li
              key={item.id}
              className={`todo-item ${deleteId === item.id ? "swipe" : ""}`}
            >
              <DragIcon />

              <div className="todo-span" onClick={() => handleClick(item.id)}>
                <img src={item.completed ? checked : checkbox}></img>
                <span className="todo-label">{item.action}</span>
              </div>
              <span className="delete-icon" onClick={() => deleteItem(item.id)}>
                <DeleteIcon />
              </span>
            </li>
          );
      })}
    </ul>
  );
}

// function ListItem() {}
