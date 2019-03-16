import React from 'react';

import '../styles/TaskList.scss';
import TaskSummary from '../components/TaskSummary';
import SearchTask from '../components/SearchTask';

const TaskList = props => {
  const tasks = [1, 2, 3, 4];

  return (
    <div className="tasks__list task-list">
      <SearchTask />
      <div className="task-list__list">
        {tasks.map((t, k) => (
          <TaskSummary key={k} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
