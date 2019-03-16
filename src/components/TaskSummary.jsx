import React from 'react';

import '../styles/TaskSummary.scss';

const TaskSummary = props => (
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
    <div className="task__progress">75%</div>
  </div>
);

export default TaskSummary;
