import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as CandidateActionCreators from '../actions/candidate';
import Header from '../components/Header';
import Candidate from '../components/Candidate';
import AddCandidateForm from '../components/AddCandidateForm';
import CandidateDetail from '../components/CandidateDetail';

class Votingboard extends Component {
  static propTypes = {
    candidates: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, candidates, selectedCandidateIndex } = this.props;
    const addCandidate = bindActionCreators(CandidateActionCreators.addCandidate, dispatch);
    const removeCandidate = bindActionCreators(CandidateActionCreators.removeCandidate, dispatch);
    const updateCandidateVotes = bindActionCreators(CandidateActionCreators.updateCandidateVotes, dispatch);
    const selectCandidate = bindActionCreators(CandidateActionCreators.selectCandidate, dispatch);

    let selectedCandidate;
    if(selectedCandidateIndex !== -1){
      selectedCandidate = candidates[selectedCandidateIndex];
    }

    const candidateComponents = candidates.map((candidate, index) => (
      <Candidate
        index={index}
        name={candidate.name}
        votes={candidate.votes}
        key={candidate.name}
        updateCandidateVotes={updateCandidateVotes}
        removeCandidate={removeCandidate}
        selectCandidate={selectCandidate}
      />
    ));
    return (
      <div className="scoreboard">
        <Header candidates={candidates} />
        <div className="candidates">
          { candidateComponents }
        </div>
        <AddCandidateForm addCandidate={addCandidate} />
        <div className="candidate-detail">
          <CandidateDetail selectedCandidate={selectedCandidate} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    candidates: state.candidates,
    selectedCandidateIndex: state.selectedCandidateIndex
  }
);

export default connect(mapStateToProps)(Votingboard);
