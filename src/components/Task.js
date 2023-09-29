import React from "react";

const Task = (props) => {
  const handleDone = () => {
    props.markDone();
  };

  const handleDelete = () => {
    props.deleteTask();
  };

  let doneText = props.done ? "Task is completed" : "To do";
  return (
    <div
      className="card"
      style={{ backgroundColor: props.done ? "lightgrey" : "#5bb4c4" }}
    >
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="todo">{props.todo}</p>
      <p>{doneText}</p>
      <button className="doneButton" onClick={handleDone}>
        Done
      </button>
      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Task;
