import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
// import App from './containers/App';

const render = () => {
  // Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root'),
  );
};

Loadable.preloadReady().then(() => {
  render();
});
