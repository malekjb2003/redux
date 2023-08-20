import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { toggleTask } from '../actions';

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredTasks = filter === 'done' ? tasks.filter((task) => task.isDone) :
    filter === 'not' ? tasks.filter((task) => !task.isDone) : tasks;

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <Task key={task.id} {...task} toggleTask={() => dispatch(toggleTask(task.id))} />
      ))}
    </div>
  );
};

export default ListTask;