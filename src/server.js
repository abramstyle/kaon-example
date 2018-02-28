import React from 'react';
import ReactDOMServer from 'react-dom/server';

// AppContainer is a necessary wrapper component for HMR
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';

import configureStore from './store/configureStore';
import App from './containers/App';
import routes from './routes';

const render = async (ctx) => {
  const context = {};
  const store = configureStore();

  const branch = matchRoutes(routes, ctx.url);

  const matched = branch[0] || {};
  const { route: { component, routes: subRoutes } } = matched;

  const subBranch = matchRoutes(subRoutes, ctx.url);
  const subMatched = subBranch[0] || {};
  const { route: { component: subComponent } } = subMatched;

  if (component) {
    component.getInitialProps();
  }

  if (subComponent) {
    await subComponent.getInitialProps(store.dispatch);
  }

  const state = store.getState();

  const Container = (
    <Provider store={store}>
      <Router
        location={ctx.url}
        context={context}
      >
        <App state={state} />
      </Router>
    </Provider>
  );

  return ReactDOMServer.renderToString(Container);
};

export default render;
