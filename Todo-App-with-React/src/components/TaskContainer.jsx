import React, { useState } from "react";
import Task from "./Task";

const TaskContainer = ({ tasks, setTasks }) => {

  const [todo, setTodo] = useState({
    title: "",
    content: "",
    completed: false,
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title) {
      const newTodo = {...todo };
      const newTask = [ ...tasks,  {...newTodo }];
      setTasks(newTask);
      setTodo({ title: "", content: "", completed: false });
      localStorage.setItem("todos", JSON.stringify(newTask));
    }
  };

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <div className="task-container">
      <form onSubmit={handleSubmit} className="task-form">
        <input
          placeholder="Enter Title"
          name="title"
          type="text"
          value={todo.title}
          onChange={handleChange}
        />

        <input
          placeholder="Enter Description"
          name="content"
          type="text"
          value={todo.content}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>

      <div className="task-mapped">
        {tasks.map((item, index) => {
          return (
            <Task
              key={index}
              todo={item}
              tasks={tasks}
              setTasks={setTasks}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskContainer;
