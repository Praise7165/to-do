// import { useState } from "react";
import calendar from "../assets/calendar.svg";
import checkbox from "../assets/checkbox.svg";
import checked from "../assets/checked.svg";
import add from "../assets/add.svg";
import DragIcon from "./DragIcon";
import DeleteIcon from "./Delete";
import EmptyIcon from "./EmptyIcon";

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
          <div className="empty-message flex flex-col items-center">
            <span>
              <EmptyIcon />
            </span>
            <p>Your todo for {day} is empty.</p>
            <button className="btn-card flex items-center" type="submit">
              <img src={add} alt="add" className="svg-icon"></img>
              <span>Add a todo</span>
            </button>
          </div>
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
              <span>
                <DragIcon />
              </span>

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
