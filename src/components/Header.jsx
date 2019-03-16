import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Header.scss';
import plusIcon from '../assets/plus.svg';

const Header = props => (
  <header className="app__header header">
    <div className="header__title">{props.title}</div>
    <button className="header__action button">
      <img src={plusIcon} className="button__icon" alt="plus" />
      <span className="button__text">Add Tasks</span>
    </button>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
