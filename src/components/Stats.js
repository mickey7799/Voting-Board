import React, { PropTypes } from 'react';

const Stats = props => {
  
  let votes = 0;
  let indexHigh = -1;
  props.candidates.forEach( (candidate, index) => {
    if(candidate.votes>votes){
      votes = candidate.votes;
      indexHigh = index;
    }
  });
  let name = 'Non';
  if(indexHigh !==-1){
    name = props.candidates[indexHigh].name;
  }

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Current Winner:</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Highest votes:</td>
          <td>{votes}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  candidates: PropTypes.array.isRequired
};

export default Stats;
