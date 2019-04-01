import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import '../styles/TaskList.scss';
import { TaskStatus } from '../constants/tasks';
import { toggleTaskSelection } from '../actions';
import SearchTask from '../components/SearchTask';
import TaskSummary from '../components/TaskSummary';
import EmptyMessage from '../components/EmptyMessage';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentWillReceiveProps(props) {
    const tasks = props.tasks.filter(
      t => t.status === props.status || (props.status === 'all' && t.status !== TaskStatus.ARCHIVED)
    );
    this.setState({ tasks: tasks });
  }

  componentDidMount() {
    const props = this.props;
    const tasks = props.tasks.filter(
      t => t.status === props.status || (props.status === 'all' && t.status !== TaskStatus.ARCHIVED)
    );
    this.setState({ tasks: tasks });
  }

  handleSearch(title) {
    this.setState({
      ...this.state,
      tasks: this.props.tasks.filter(t => t.title.match(new RegExp(title, 'i')))
    });
  }

  handleTaskSelection(task) {
    this.props.dispatch(toggleTaskSelection(task.id));
  }

  render() {
    const tasks = this.state.tasks;
    const selectedTask = this.props.selectedTask;
    if (tasks.length) {
      return (
        <div className="tasks__list task-list">
          <SearchTask onSearch={this.handleSearch.bind(this)} />
          <div className="task-list__list">
            {tasks.map((task, key) => (
              <TaskSummary
                key={key}
                task={task}
                isSelected={selectedTask.id === task.id}
                onTaskSelected={this.handleTaskSelection.bind(this, task)}
              />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="tasks__list task-list">
        <EmptyMessage message="No tasks!" />
      </div>
    );
  }
}

TaskList.propTypes = {
  status: PropTypes.string
};

export default connect(state => ({
  tasks: Object.keys(state.tasks).map(k => state.tasks[k]),
  selectedTask: state.tasks[state.selectedTask] || {}
}))(TaskList);
