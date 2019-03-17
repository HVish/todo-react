import React from 'react';
import { connect } from 'react-redux';

import '../styles/TaskDetails.scss';
import EditIcon from '../assets/edit.svg';
import DoneIcon from '../assets/done.svg';
import EmptyMessage from '../components/EmptyMessage';
import CircularProgress from '../components/CircularProgress';

const TaskDetails = props => {
  const task = props.selectedTask;
  const isTaskSelected = !!task.id;

  if (isTaskSelected) {
    return (
      <div className="tasks__details task-panel">
        <h1 className="task-panel__title">{task.title}</h1>
        <div className="task-panel__metas">
          <div className="task-panel__section">
            <CircularProgress
              className="task-panel__canvas"
              color="#fbc02d"
              showLabel
              width={150}
              progress={task.progress}
            />
          </div>
          <div className="task-panel__section">
            <div className="meta">
              <span className="meta__title">ID:</span>
              <span className="meta__value">{task.id}</span>
            </div>
            <div className="meta">
              <span className="meta__title">Date of creation:</span>
              <span className="meta__value">{task.createdAt}</span>
            </div>
            <div className="meta">
              <span className="meta__title">Tags:</span>
              <span className="meta__value">
                {task.tags.map((tag, key) => (
                  <span key={key} className="tag">
                    {tag}
                  </span>
                ))}
              </span>
            </div>
            <div className="meta">
              <span className="meta__title">Status:</span>
              <span className="meta__value">{task.status}</span>
            </div>
          </div>
        </div>
        <div className="task-panel__details-label">Description: </div>
        <p className="task-panel__details">{task.description}</p>
        <div className="task-panel__actions">
          <button className="button button_info">
            <img src={EditIcon} alt="edit" className="button__icon" />
            <span className="button__text">Edit Task</span>
          </button>
          <button className="button button_success">
            <img src={DoneIcon} alt="done" className="button__icon" />
            <span className="button__text">Done</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="tasks__details task-panel">
      <EmptyMessage message="No tasks selected" />
    </div>
  );
};

export default connect(state => ({ selectedTask: state.selectedTask }))(TaskDetails);
