import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
// import PropTypes from 'prop-types';
import Logo from '../Logo';

import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleTapNavButton = this.handleTapNavButton.bind(this);
  }

  handleTapNavButton() {
    this.toggleNavState();
  }

  toggleNavState() {
    this.setState({
      show: !this.state.show,
    });
  }

  handleClickLink = () => {
    this.toggleNavState();
  }

  render() {
    const { show } = this.state;
    const toggleClass = classnames('toggle', { show });
    return (
      <header styleName="header">
        <h1 styleName="logo">
          <Logo />
        </h1>
        <nav styleName={classnames('nav', { show })}>
          <button
            styleName={toggleClass}
            onClick={this.handleTapNavButton}
          >Open
          </button>
          <div styleName="menu">
            <div styleName="menu-logo">
              <Logo />
            </div>
            <ul>
              <li><Link onClick={this.handleClickLink} to="/posts">posts</Link></li>
              <li><Link onClick={this.handleClickLink} to="/comments">comments</Link></li>
              <li><Link onClick={this.handleClickLink} to="/profile">profile</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
