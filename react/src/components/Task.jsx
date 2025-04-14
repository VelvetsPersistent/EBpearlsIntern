import React, { useState } from 'react';
import '../styles/task.css';

function Task() {
  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTaskList([...taskList, { text: taskInput, completed: false }]);
      setTaskInput(""); // Clear input after adding task
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...taskList];
    newTasks[index].completed = !newTasks[index].completed;
    setTaskList(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = taskList.filter((_, i) => i !== index);
    setTaskList(newTasks);
  };

  return (
    <section className="task-manager">
      <div className="task-bg">
        <div className="task-intro">
          <h1>Task manager</h1>
          <p>Your daily to do list</p>
        </div>
        <div className="task-todo">
          <div className="tasks">
            {taskList.map((task, index) => (
              <div key={index} className={`task-container ${task.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  className='checkbox'
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span className="task-text">{task.text}</span>
                <button onClick={() => deleteTask(index)} className="delete-button">
                  <img src="assets/dismiss.jpg" alt="Delete" className="delete-icon" />
                  <span>Delete</span>
                </button>
              </div>
            ))}
          </div>
          <div className="task-entry">
            <input
              type="text"
              id="task-input"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Add new task"
            />
            <button onClick={addTask} id="add-button">Add task</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Task;
