import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../styles/TaskList.scss';
import Task from '../models/Task';
import { toggleTaskSelection } from '../actions';
import TaskSummary from '../components/TaskSummary';
import SearchTask from '../components/SearchTask';

const TaskList = props => {
  const [tasks, setTasks] = useState(props.tasks);

  const handleSearch = title => {
    setTasks(props.tasks.filter(task => task.title.match(new RegExp(title, 'i'))));
  };

  const handleTaskSelection = task => {
    props.dispatch(toggleTaskSelection(task));
  };

  return (
    <div className="tasks__list task-list">
      <SearchTask onSearch={handleSearch} />
      <div className="task-list__list">
        {tasks.map((task, key) => (
          <TaskSummary
            key={key}
            task={task}
            isSelected={props.selectedTask.id === task.id}
            onTaskSelected={handleTaskSelection.bind(null, task)}
          />
        ))}
      </div>
    </div>
  );
};

// mocks state-data for now
const tasksList = [
  (new Task('Create a todo app in React')).toJSON(),
  (new Task('Complete 100km running in one week')).toJSON(),
  (new Task('Watch 2 movies this weekend with friends')).toJSON(),
  (new Task('Call doctor for appointment')).toJSON(),
  (new Task('Pay house rent')).toJSON()
];

export default connect(state => ({ tasks: tasksList, selectedTask: state.selectedTask }))(TaskList);
