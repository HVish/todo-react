import keyBy from 'lodash/keyBy';
import Task from '../models/Task';
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/types';

const t = [
  new Task('Create a todo app in React').setProgress(30).toJSON(),
  new Task('Complete 100km running in one week').startProgress().toJSON(),
  new Task('Watch 2 movies this weekend with friends').markAsDone().toJSON(),
  new Task('Call doctor for appointment').toJSON(),
  new Task('Pay house rent').toJSON()
];
const initialState = keyBy(t, 'id');

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const task = Task.from(action.task).toJSON();
      return {
        [task.id]: task,
        ...state
      };
    }
    case UPDATE_TASK: {
      const { [action.task.id]: task, ...otherTasks } = state;
      return {
        [task.id]: {
          ...task,
          ...action.task
        },
        ...otherTasks
      };
    }
    case DELETE_TASK: {
      const { [action.task.id]: task, ...otherTasks } = state;
      return otherTasks;
    }
    default:
      return state;
  }
};

export default tasks;
