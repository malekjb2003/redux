import React from 'react';

const Task = ({ id, description, isDone, toggleTask }) => {
  return (
    <div className={`task ${isDone ? 'done' : ''}`} onClick={() => toggleTask(id)}>
      <span>{description}</span>
    </div>
  );
};

export default Task;