import React from 'react';
import { hot } from 'react-hot-loader';

// import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'ionicons/dist/css/ionicons.min.css';

import getRoutes from './routes';
import getPlatform from './helpers/platform';

const md = getPlatform();

const basename = md.mobile() ? 'mobile' : null;
const routes = getRoutes();

const App = () => (
  <Router basename={basename}>
    {renderRoutes(routes)}
  </Router>
);

export default hot(module)(App);
