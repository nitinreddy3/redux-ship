// @flow
import React, { Component } from 'react';
import './App.css';
import * as Controller from './controller';
import * as Model from './model';

type Props = {
  dispatch: (action: Controller.Action) => void,
  state: Model.State,
};

class App extends Component<void, Props, void> {
  handleClick: () => void = () => {
    this.props.dispatch({
      type: 'Load',
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Redux Ship</h1>
          <h2>Basic example</h2>
        </div>
        <div className="App-content">
          <button
            disabled={this.props.state.isLoading}
            onClick={this.handleClick}
          >
            {this.props.state.isLoading ? 'Loading' : 'Get Luke\'s full name'}
          </button>
          <p>
            {this.props.state.fullName}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
