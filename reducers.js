import { ADD_TASK, TOGGLE_TASK } from './actionTypes';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: Date.now(),
          description: action.payload.description,
          isDone: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, isDone: !task.isDone }
          : task
      );
    default:
      return state;
  }
};

export default taskReducer;
