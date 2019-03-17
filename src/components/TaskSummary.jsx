import React from 'react';

import '../styles/TaskSummary.scss';
import CircularProgress from './CircularProgress';

const TaskSummary = props => {
  const progress = 75;

  return (
    <div className="task-list__item task">
      <div className="task__drag-handle" />
      <div className="task__details">
        <div className="task__title">Create a todo app in React</div>
        <div className="task__tags">
          <span className="tag">TODO</span>
          <span className="tag">React</span>
          <span className="tag">App</span>
        </div>
      </div>
      <CircularProgress className="task__progress" color="#7e57c2" width={40} progress={progress} />
    </div>
  );
};

export default TaskSummary;
