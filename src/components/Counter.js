import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div className="counter" >
    <button
      className="counter-action decrement"
      onClick={() => props.updateCandidateVotes(props.index, -1)}>
      -
    </button>
    <div className="counter-score"> {props.votes} </div>
    <button
      className="counter-action increment"
      onClick={() => props.updateCandidateVotes(props.index, 1)}>
      +
    </button>
  </div>);

  Counter.propTypes = {
      updateCandidateVotes: PropTypes.func.isRequired,
      index: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired
  };

export default Counter;
