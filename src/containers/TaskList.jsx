import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../styles/TaskList.scss';
import { toggleTaskSelection } from '../actions';
import TaskSummary from '../components/TaskSummary';
import SearchTask from '../components/SearchTask';
import EmptyMessage from '../components/EmptyMessage';

const TaskList = props => {
  const taskList = Object.keys(props.tasks)
    .map(t => props.tasks[t])
    .filter(t => t.status === props.status || props.status === 'all');

  const [tasks, setTasks] = useState(taskList);

  const handleSearch = title => {
    setTasks(taskList.filter(task => task.title.match(new RegExp(title, 'i'))));
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

export default connect(state => ({
  tasks: state.tasks,
  selectedTask: state.selectedTask
}))(TaskList);
