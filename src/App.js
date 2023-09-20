import "./App.css";
import Task from "./components/Task";
import React, { useState } from "react";

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {
        id: 1,
        title: "Dishes",
        description: "Empty dishwasher",
        deadline: "Today",
      },
      {
        id: 2,
        title: "Laundry",
        description: "Fold clothes and put away",
        deadline: "Tomorrow",
      },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "Homework", deadline: "Tomorrow" },
      { id: 5, title: "Shower", deadline: "Today" },
    ],
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {/* <Task title="Dishes" deadline="Today" todo="Empty Dishwasher" />
      <Task
        title="Laundry"
        deadline="Tomorrow"
        todo="Fold laundry and put away"
      />
      <Task title="Tidy" deadline="Today" /> */}
      {taskState.tasks.map(task => {
        return (
          <Task title={task.title} deadline={task.deadline} key={task.id} />
        );
      })}
    </div>
  );
}

export default App;
