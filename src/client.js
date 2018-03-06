import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

// import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './containers/App';

const render = () => {
  // Loadable.preloadReady().then(() => {
  Loadable.preloadReady().then((res) => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
      document.querySelector('#root'),
    );
  });
};
render();

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept(() => {
//     render();
//   });
// }
