
import React, { Component, PropTypes } from 'react';


export default class CandidateDetail extends Component{

  static propTypes = {
    selectedCandidate: PropTypes.object
  };

  render() {
  const { selectedCandidate } = this.props;
  if(selectedCandidate){
    return (
      <div>
        <h3>{selectedCandidate.name}</h3>
        <ul>
          <li>
            <span>Votes: </span> 
            {selectedCandidate.votes}
          </li>
          <li>
            <span>Party: </span> 
            {selectedCandidate.party}
          </li>
          <li>
            <span>Politics: </span> 
            {selectedCandidate.politics}
          </li> 
          <li>
            <span>Created: </span> 
            {selectedCandidate.created}
          </li>       
        </ul>
        
      </div>
    );
  }else {
    return (<p>Click on a candidate to see more details</p>);
  }

}



}
