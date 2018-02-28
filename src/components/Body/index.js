import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function Body(props) {
  return (
    <body>
      {props.children}
    </body>
  );
}

Body.propTypes = propTypes;

export default Body;
