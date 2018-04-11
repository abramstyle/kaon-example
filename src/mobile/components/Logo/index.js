import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import icon from './icon.png';

function Logo() {
  return (
    <div styleName="logo">
      <div styleName="icon">
        <Link to="/">
          <img src={icon} alt="Kaon Example" />
        </Link>
      </div>
      <div styleName="brand">
        Kaon example
      </div>
    </div>
  );
}

export default Logo;
