import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../styles/TaskList.scss';
import Task from '../models/Task';
import { toggleTaskSelection } from '../actions';
import TaskSummary from '../components/TaskSummary';
import SearchTask from '../components/SearchTask';
import EmptyMessage from '../components/EmptyMessage';

const TaskList = props => {
  const [tasks, setTasks] = useState(
    props.tasks.filter(t => t.status === props.status || props.status === 'all')
  );

  const handleSearch = title => {
    setTasks(props.tasks.filter(task => task.title.match(new RegExp(title, 'i'))));
  };

  const handleTaskSelection = task => {
    props.dispatch(toggleTaskSelection(task));
  };

  if (tasks.length) {
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
  }
  return (
    <div className="tasks__list task-list">
      <EmptyMessage message="No tasks!" />
    </div>
  );
};

TaskList.propTypes = {
  status: PropTypes.string
};

// mocks state-data for now
const tasksList = [
  new Task('Create a todo app in React').setProgress(30).toJSON(),
  new Task('Complete 100km running in one week').startProgress().toJSON(),
  new Task('Watch 2 movies this weekend with friends').markAsDone().toJSON(),
  new Task('Call doctor for appointment').toJSON(),
  new Task('Pay house rent').toJSON()
];

export default connect(state => ({ tasks: tasksList, selectedTask: state.selectedTask }))(TaskList);
