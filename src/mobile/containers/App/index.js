import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
// import 'normalize.css';

import Header from '../../components/Header';
// import Posts from '../../containers/Posts';
// import Comments from '../../containers/Comments';
// import Profile from '../../containers/Profile';
import './style.css';

const propTypes = {
  route: PropTypes.object.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { route } = this.props;
    return (
      <div styleName="main">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Helmet>
        <Header />
        {renderRoutes(route.routes)}
      </div>
    );
  }
}


App.propTypes = propTypes;

export default App;
