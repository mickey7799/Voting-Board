import * as CandidateActionTypes from '../actiontypes/candidate';

export const addCandidate = (name, party, politics )=> {
  return {
    type: CandidateActionTypes.ADD_CANDIDATE,
    name,
    party,
    politics
  };
};

export const removeCandidate = index => {
  return {
    type: CandidateActionTypes.REMOVE_CANDIDATE,
    index
  };
};

export const updateCandidateVotes = (index, votes)  => {
   return {
     type: CandidateActionTypes.UPDATE_CANDIDATE_VOTES,
     index,
     votes
  };
};

export const selectCandidate = index => {
  return {
    type: CandidateActionTypes.SELECT_CANDIDATE,
    index
  };
};


