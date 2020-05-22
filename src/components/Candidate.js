import React, { PropTypes } from 'react';
import Counter from './Counter';

const Candidate = props => (
  <div className="player">
    <div className="player-name"
      onClick={() => props.selectCandidate(props.index)}>
      <a className="remove-player"
        onClick={() => props.removeCandidate(props.index)}>
        ✖
      </a>
      {props.name}
    </div>
    <div className="player-score">
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
