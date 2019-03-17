import React from 'react';

import '../styles/SearchTask.scss';

const SearchTask = props => {
  return (
    <div className="task-list__search search">
      <input
        type="text"
        className="search__input"
        placeholder="Search tasks"
        onChange={e => props.onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchTask;
