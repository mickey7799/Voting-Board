import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CandidateReducer from './src/reducers/candidate';
import Votingboard from './src/containers/Votingboard';

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
