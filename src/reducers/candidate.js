import * as CandidateActionTypes from '../actiontypes/candidate';

const initialState = {
	candidates: [{
		name: 'Ing-Wen Tsai',
	  votes: 100,
		party: 'Democratic Progressive Party',
		politics: 'Join CPTPP/Green Energy',
		created: '1/13/2020'
	},
	{
		name: 'Kuo-Yu Han',
		votes: 20,
		party: 'Chinese Nationalist Party',
		politics: 'Sign ECFA',
		created: '1/13/2020'
	},
	{
		name: 'Chu-Yu Soong',
		votes: 30,
		party: 'People First Party',
		politics: 'Lower the gap between rich and poor',
		created: '1/13/2020'
	}
	],
	selectedCandidateIndex: -1
}

export default function Candidate(state=initialState, action) {	

	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();
	
  switch(action.type){
    case CandidateActionTypes.ADD_CANDIDATE: {
			const addCandidateList = [...state.candidates,   {
          name: action.name,
					votes: 0,
					party: action.party,
					politics: action.politics,
          created: `${month}/${day}/${year}`
      }];
      return {
        ...state,
				candidates: addCandidateList
		 	};
	 	}

    case CandidateActionTypes.REMOVE_CANDIDATE: {
			const removeCandidateList = [
				...state.candidates.slice(0, action.index),
				...state.candidates.slice(action.index + 1)
			];
      return {
				...state,
				candidates: removeCandidateList
			};
		}

    case CandidateActionTypes.UPDATE_CANDIDATE_VOTES: {
			const updateCandidateList = state.candidates.map((candidate, index) => {
        if(index === action.index){
          return {
            ...candidate,
             votes: candidate.votes + action.votes
           };
        }
        return candidate;
      });
			return {
				...state,
				candidates: updateCandidateList
			};
		}

		case CandidateActionTypes.SELECT_CANDIDATE:
		  return {
				...state,
				selectedCandidateIndex: action.index
			};

	

    default:
      return state;
  }
}
