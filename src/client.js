import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { preloadedState } from './store';
import App from './containers/App';

const render = () => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <App
            state={preloadedState}
          />
        </Router>
      </Provider>
    </AppContainer>,
    document.getRootNode(),
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}
