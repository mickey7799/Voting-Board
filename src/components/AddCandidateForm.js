import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCandidateForm extends Component {
  static propTypes = {
    addCandidate: PropTypes.func.isRequired,
  };

  state = { name: '',
            party: '',
            politics: ''
          };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };
  onPartyChange = (e) => {
    const party = e.target.value;
    this.setState({ party });
  };
  onPoliticsChange = (e) => {
    const politics = e.target.value;
    this.setState({ politics });
  };

  addCandidate = (e) => {
    if (e) e.preventDefault();
    this.props.addCandidate(this.state.name, this.state.party, this.state.politics);
    this.setState({ name: '',
                    party: '',
                    politics: ''
                   });
  };

  render() {
    return (
      <div className="add-candidate-form">
        <form onSubmit={this.addCandidate}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Candidate Name"
          />
          <input
            type="text"
            value={this.state.party}
            onChange={this.onPartyChange}
            placeholder="Candidate Party"
          />
          <input
            type="text"
            value={this.state.politics}
            onChange={this.onPoliticsChange}
            placeholder="Candidate Politics"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
