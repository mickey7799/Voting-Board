import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CandidateReducer from './reducers/candidate';
import Votingboard from './containers/Votingboard';
import './app.css';

const store = createStore(
  CandidateReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Votingboard />
  </Provider>,
  document.getElementById('root')
);
