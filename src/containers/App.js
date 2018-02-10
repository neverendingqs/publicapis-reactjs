import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appLoad } from '../actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.appLoad();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ appLoad }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(App);
