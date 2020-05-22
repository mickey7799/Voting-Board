import React, { Component, PropTypes } from 'react';

export default class AddCandidateForm extends Component {
  static propTypes = {
    addCandidate: PropTypes.func.isRequired,
  };

  state = { name: '' };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };

  addCandidate = (e) => {
    if (e) e.preventDefault();
    this.props.addCandidate(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addCandidate}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Candidate Name"
          />
          <input type="submit" value="Add Candidate" />
        </form>
      </div>
    );
  }
}
