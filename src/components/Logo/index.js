import React from 'react';
import { Link } from 'react-router-dom';
import cssModules from 'react-css-modules';
import styles from './style.css';

function Logo() {
  return (
    <Link styleName="logo" to="/">React Boilerplate</Link>
  );
}

export default cssModules(Logo, styles);
