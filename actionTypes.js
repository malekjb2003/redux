import { ADD_TASK, TOGGLE_TASK } from './actionTypes';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});
