import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string,
};

const defaultProps = {
  lang: 'en',
};

function Html(props) {
  return (
    <html lang={props.lang}>
      {props.children}
    </html>
  );
}

Html.propTypes = propTypes;
Html.defaultProps = defaultProps;

export default Html;
