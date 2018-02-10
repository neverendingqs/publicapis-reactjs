import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchUpdate } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.searchUpdate(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="e.g. pokemon"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ searchUpdate }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(Search);
