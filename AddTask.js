import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  return (
    <div className="add-task">
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;