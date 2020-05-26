import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const Candidate = props => (
  <div className="candidate">
    <div className="candidate-name"
      onClick={() => props.selectCandidate(props.index)}>
      <button className="remove-candidate"
        onClick={() => props.removeCandidate(props.index)}>
        ✖
      </button>
      {props.name}
    </div>
    <div className="candidate-score">
      <Counter
        index={props.index}
        updateCandidateVotes={props.updateCandidateVotes}
        votes={props.votes}
      />
    </div>
  </div>
);

Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  updateCandidateVotes: PropTypes.func.isRequired,
  selectCandidate: PropTypes.func.isRequired
};

export default Candidate;
