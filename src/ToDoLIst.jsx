import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const swapElements = (index1, index2) => {
        const newTasks = [...tasks];
        [newTasks[index1], newTasks[index2]] = [newTasks[index2], newTasks[index1]];
        return newTasks;
    };

    const handleNewTask = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if(newTask==="")return;
        setTasks((t) => [...t, newTask]);
        setNewTask("");
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const moveTaskUp = (index) => {
        if (tasks.length < 2) {
            return;
        }
        index > 0 ? setTasks((t) => swapElements(index, index - 1)) : null;
    };

    const moveTaskDown = (index) => {
        if (tasks.length < 2) {
            return;
        }
        index < tasks.length - 1 ? setTasks((t) => swapElements(index, index + 1)) : null;
    };

    return (
        <div className="container">
            <h1 className="container-heading">To Do List</h1>
            <ul className="container-list-items">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <div className="button-container">
                            <button className="button up" onClick={() => moveTaskUp(index)}>⬆️</button>
                            <button className="button down" onClick={() => moveTaskDown(index)}>⬇️</button>
                            <button className="button delete" onClick={() => deleteTask(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <input
                className="addTask"
                type="text"
                value={newTask}
                onChange={handleNewTask}
                placeholder="enter new task"
            />
            <button className="addTaskButton button" onClick={addTask}>Add Task</button>
        </div>
    );
}

export default ToDoList;
