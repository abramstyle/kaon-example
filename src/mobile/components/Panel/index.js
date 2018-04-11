import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.node,
  children: PropTypes.node,
};

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title, background } = this.props;
    const backgroundEl = background ? (
      <div styleName="background">
        {background}
      </div>
    ) : null;

    return (
      <div styleName="panel">
        <header styleName={classnames('header', { 'has-background': background })}>
          {backgroundEl}
          <h1 styleName="title">{title}</h1>
        </header>
        <div styleName="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Panel.propTypes = propTypes;

export default Panel;
