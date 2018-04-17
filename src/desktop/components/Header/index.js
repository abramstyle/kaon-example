import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Logo from '../Logo';
import Wrapper from '../Wrapper';

import './style.css';

function Header() {
  return (
    <header styleName="header">
      <Wrapper>
        <div styleName="header-container">
          <h1 styleName="logo">
            <Logo />
          </h1>
          <nav styleName="nav">
            <ul>
              <li><Link to="/posts">posts</Link></li>
              <li><Link to="/comments">comments</Link></li>
              <li><Link to="/profile">profile</Link></li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
