import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function Head(props) {
  return (
    <head>
      {props.children}
    </head>
  );
}

Head.propTypes = propTypes;

export default Head;
