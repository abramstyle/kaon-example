import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Wrapper(props) {
  return (
    <div styleName="wrapper">{props.children}</div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
