import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../styles/TaskList.scss';
import TaskSummary from '../components/TaskSummary';
import SearchTask from '../components/SearchTask';
import Task from '../models/Task';

const TaskList = props => {
  const [tasks, setTasks] = useState(props.tasks);

  const handleSearch = title => {
    setTasks(props.tasks.filter(task => task.title.match(new RegExp(title, 'i'))));
  };

  return (
    <div className="tasks__list task-list">
      <SearchTask onSearch={handleSearch} />
      <div className="task-list__list">
        {tasks.map((task, key) => (
          <TaskSummary key={key} {...task} />
        ))}
      </div>
    </div>
  );
};

// mocks state-data for now
const tasksList = [
  new Task('Create a todo app in React'),
  new Task('Complete 100km running in one week'),
  new Task('Watch 2 movies this weekend with friends'),
  new Task('Call doctor for appointment'),
  new Task('Pay house rent')
];

export default connect(state => ({ tasks: tasksList }))(TaskList);
