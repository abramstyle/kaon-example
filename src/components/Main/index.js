import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import cssModules from 'react-css-modules';

import Header from '../Header';
import Posts from '../../containers/Posts';
import Comments from '../../containers/Comments';
import Profile from '../../containers/Profile';

import styles from './style.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="main">
        <Header />
        <Switch>
          <Route path="/" component={Posts} />
          <Route path="/posts" component={Posts} />
          <Route path="/comments" component={Comments} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default cssModules(Main, styles);
