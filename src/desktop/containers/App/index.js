import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
// import 'normalize.css';
// import 'ionicons/dist/css/ionicons.min.css';

import Helmet from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Posts from '../../containers/Posts';
// import Comments from '../../containers/Comments';
// import Profile from '../../containers/Profile';
// import './style.css';

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
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet" />
          {/* <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" /> */}
        </Helmet>
        <Header />
        {renderRoutes(route.routes)}
        <Footer />
      </div>
    );
  }
}


App.propTypes = propTypes;

export default App;
