import { TOGGLE_TASK_SELECTION } from '../actions/types';

const initialState = {};

const selectedTask = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TASK_SELECTION:
      return state.id === action.task.id ? initialState : action.task;
    default:
      return state;
  }
};

export default selectedTask;
