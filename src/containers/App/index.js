import React from 'react';
import PropTypes from 'prop-types';

import { hot } from 'react-hot-loader';
import 'normalize.css';
import Main from '../../components/Main';
import Html from '../../components/Html';
import Head from '../../components/Head';
import Body from '../../components/Body';

import '../../styles/basic.css';

const propTypes = {
  state: PropTypes.object.isRequired,
};

function App(props) {
  const preloadedState = `window.__PRELOADED_STATE__ = ${JSON.stringify(props.state)}`;
  return (
    <Html>
      <Head>
        <title>React Boilerplate</title>
      </Head>
      <Body>
        <div className="smurfs-app">
          <Main />
        </div>
        <script dangerouslySetInnerHTML={{ __html: preloadedState }} />
        <script src="http://localhost:1592/manifest.js" />
        <script src="http://localhost:1592/commons.js" />
        <script src="http://localhost:1592/app.js" />
      </Body>
    </Html>
  );
}

App.propTypes = propTypes;
App.getInitialProps = () => {
  console.log('get initial props.');
};

// export default App;
export default hot(module)(App);
