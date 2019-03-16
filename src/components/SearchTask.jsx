import React from 'react';

import '../styles/SearchTask.scss';

const SearchTask = props => {
  return (
    <div className="task-list__search search">
      <span className="search__icon" />
      <input type="text" className="search__input" placeholder="Search tasks" />
    </div>
  );
};

export default SearchTask;
