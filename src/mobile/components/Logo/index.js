import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Logo() {
  return (
    <Link styleName="logo" to="/">React Boilerplate desktop</Link>
  );
}

export default Logo;