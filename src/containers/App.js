import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appLoad } from '../actions';
import ApiList from '../containers/ApiList';
import Search from '../containers/Search';

class App extends Component {
  componentDidMount() {
    this.props.appLoad();
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1 className="display-1">Public APIs</h1>
          <p>Source: <a href='https://github.com/toddmotto/public-apis' target="_blank" rel="noopener noreferrer">toddmotto/public-apis</a></p>
          <p>API managed by: <a href='https://github.com/davemachado/public-api' target="_blank" rel="noopener noreferrer">davemachado/public-api</a></p>
          <hr />
        </div>
        <Search />
        <ApiList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ appLoad }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(App);
