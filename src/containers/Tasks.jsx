import React from 'react';

import '../styles/Tasks.scss';
import TaskDetails from './TaskDetails';
import TaskList from './TaskList';

const Tasks = props => (
  <div className="tasks">
    <TaskList />
    <TaskDetails />
  </div>
);

export default status => props => <Tasks {...props} status={status} />;
