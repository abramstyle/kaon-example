import React from 'react';
// import PropTypes from 'prop-types';

import { hot } from 'react-hot-loader';
import 'normalize.css';
import Main from '../../components/Main';

import '../../styles/basic.css';

const propTypes = {
};

function App() {
  return (
    <Main />
  );
}

App.propTypes = propTypes;
App.getInitialProps = () => {
  console.log('get initial props.');
};

// export default App;
export default hot(module)(App);
