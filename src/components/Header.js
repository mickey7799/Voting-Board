import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

const Header = props => {
  return (
    <div className="header">    
      <h1>Voting Board</h1>
      <Stats candidates={props.candidates} />
    </div>
  );
};

Header.propTypes = {
  candidates: PropTypes.array.isRequired
};

export default Header;
