import React from 'react';
import ReactDOMServer from 'react-dom/server';

// AppContainer is a necessary wrapper component for HMR
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../build/react-loadable.json';

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

  if (subComponent && subComponent.getInitialProps) {
    await subComponent.getInitialProps(store.dispatch);
  }

  const state = store.getState();
  const modules = [];

  const Container = (
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <Router
          location={ctx.url}
          context={context}
        >
          <App />
        </Router>
      </Provider>
    </Loadable.Capture>
  );

  const html = ReactDOMServer.renderToString(Container);
  const helmet = Helmet.renderStatic();

  const bundles = getBundles(stats, modules);

  return {
    html,
    state,
    helmet,
    bundles,
  };
};

export default render;
