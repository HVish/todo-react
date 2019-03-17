import React from 'react';

import '../styles/TaskSummary.scss';
import CircularProgress from './CircularProgress';

const TaskSummary = props => {
  return (
    <div className="task-list__item task">
      <div className="task__drag-handle" />
      <div className="task__details">
        <div className="task__title">{props.title}</div>
        <div className="task__tags">
          {props.tags.map((tag, key) => (
            <span className="tag" key={key}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <CircularProgress
        className="task__progress"
        color="#7e57c2"
        width={40}
        progress={props.progress}
      />
    </div>
  );
};

export default TaskSummary;
