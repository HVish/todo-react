import React from 'react';
import { Route } from 'react-router-dom';

import '../styles/App.scss';
import SideNav from './SideNav';
import MainContainer from './MainContainer';
import Tasks from '../containers/Tasks';
import { TaskStatus } from '../constants/tasks';

const App = props => (
  <div className="app">
    <SideNav />
    <MainContainer>
      <Route path={`${props.match.path}/completed`} component={Tasks(TaskStatus.COMPLETED)} />
      <Route path={`${props.match.path}/in-progress`} component={Tasks(TaskStatus.IN_PROGRESS)} />
      <Route path={`${props.match.path}/pending`} component={Tasks(TaskStatus.PENDING)} />
      <Route exact path={`${props.match.path}`} component={Tasks('all')} />
    </MainContainer>
  </div>
);

export default App;
