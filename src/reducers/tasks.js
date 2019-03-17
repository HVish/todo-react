import Task from '../models/Task';
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/types';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, Task.from(action.task).toObject()];
    case UPDATE_TASK:
      return state.map(task => (task.id === action.task.id ? { ...task, ...action.task } : task));
    case DELETE_TASK:
      return state.filter(task => task.id !== action.task.id);
    default:
      return state;
  }
};

export default tasks;