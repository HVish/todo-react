import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/SideNav.scss';
import TasksIcon from '../assets/task-search.svg';
import TaskCompleteIcon from '../assets/task-completed.svg';
import TaskPendingIcon from '../assets/task-pending.svg';
import TaskInProgressIcon from '../assets/task-in-progress.svg';

import Author from './Author';
import NavItem from './NavItem';
import CircularProgress from './CircularProgress';

const SideNav = () => (
  <nav className="app__side-nav nav">
    <NavItem classes="nav__header">
      <Author name="Vishnu Singh" />
    </NavItem>
    <NavItem>
      <NavLink exact to="/tasks" className="nav__link link" activeClassName="link_active">
        <img src={TasksIcon} alt="task" className="link__icon" />
        <span className="link__text">All Tasks</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/tasks/pending" className="nav__link link" activeClassName="link_active">
        <img src={TaskPendingIcon} alt="task" className="link__icon" />
        <span className="link__text">Pending</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/tasks/in-progress" className="nav__link link" activeClassName="link_active">
        <img src={TaskInProgressIcon} alt="task" className="link__icon" />
        <span className="link__text">In Progress</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/tasks/completed" className="nav__link link" activeClassName="link_active">
        <img src={TaskCompleteIcon} alt="task" className="link__icon" />
        <span className="link__text">Completed</span>
      </NavLink>
    </NavItem>
    <NavItem classes="overall-progress">
      <div className="overall-progress__label">Task Progress</div>
      <CircularProgress
        className="overall-progress__canvas"
        color="#ffc800"
        showLabel
        width={150}
        progress={70}
      />
    </NavItem>
  </nav>
);

export default SideNav;
