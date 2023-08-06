import React from "react";
import {MdCancel, MdDoneAll} from 'react-icons/md'

const Task = ({ todo, tasks, setTasks, index }) => {


    const saveToLocal = (name, data) =>{
        localStorage.setItem(name, JSON.stringify(data))
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        let newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
        saveToLocal("todos", newTask)

    }

    const handleCompleted = (e) =>{
        e.preventDefault();
        let newTask = [...tasks]
        newTask[index].completed = !newTask[index].completed 
        setTasks(newTask)

        //commited now
    }

    console.log(tasks)
  return (
    <div className="todo-container">
      <div className="todo-text">
        <div className="todo-title">Title: {todo.title}</div>
        <div className="todo-desc">Description: {todo.content}</div>
      </div>
    <div className="todo-action">
        <button className="btn" onClick={(e) => handleCompleted(e)}><MdDoneAll /></button>
        <button className="btn" onClick={(e) => handleDelete(e)}><MdCancel /></button>
    </div>
      
    </div>
  );
};

export default Task;
