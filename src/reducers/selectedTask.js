import { TOGGLE_TASK_SELECTION, UPDATE_TASK } from '../constants/action-types';

const initialState = {};

const selectedTask = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TASK_SELECTION:
      return state.id === action.task.id ? initialState : action.task;
    case UPDATE_TASK:
      return state.id === action.task.id ? action.task : state;
    default:
      return state;
  }
};

export default selectedTask;
