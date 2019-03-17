import React from 'react';

import '../styles/TaskDetails.scss';
import EditIcon from '../assets/edit.svg';
import DoneIcon from '../assets/done.svg';
import CircularProgress from '../components/CircularProgress';

const TaskDetails = props => (
  <div className="tasks__details task-panel">
    <h1 className="task-panel__title">My awesome long tedious task!</h1>
    <div className="task-panel__metas">
      <div className="task-panel__section">
        <CircularProgress
          className="task-panel__canvas"
          color="#fbc02d"
          showLabel
          width={150}
          progress={70}
        />
      </div>
      <div className="task-panel__section">
        <div className="meta">
          <span className="meta__title">ID:</span>
          <span className="meta__value">1022</span>
        </div>
        <div className="meta">
          <span className="meta__title">Date of creation:</span>
          <span className="meta__value">25th Feb 2019</span>
        </div>
        <div className="meta">
          <span className="meta__title">Tags:</span>
          <span className="meta__value">
            <span className="tag">TODO</span>
            <span className="tag">React</span>
            <span className="tag">App</span>
          </span>
        </div>
        <div className="meta">
          <span className="meta__title">Status:</span>
          <span className="meta__value">Pending</span>
        </div>
      </div>
    </div>
    <div className="task-panel__details-label">Description: </div>
    <p className="task-panel__details">
      I need to do bla bla then you have to do some bla bla test. Even now the task is not done do
      some more bla blaaaa. Now it feel like its done!
    </p>
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

export default TaskDetails;
