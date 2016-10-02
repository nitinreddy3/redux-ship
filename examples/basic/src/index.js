// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Ship from 'redux-ship';
import App from './App';
import './index.css';
import store from './store';
import * as Controller from './controller';
import * as Effect from './effect';

function dispatch(action: Controller.Action): void {
  Ship.run(Effect.run, store.dispatch, store.getState, Controller.control(action));
}

function render() {
  ReactDOM.render(
    <App
      dispatch={dispatch}
      state={store.getState()}
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
