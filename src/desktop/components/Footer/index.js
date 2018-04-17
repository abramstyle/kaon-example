import React from 'react';

import Wrapper from '../Wrapper';
import './style.css';

function Footer() {
  return (
    <div styleName="footer">
      <Wrapper>
        <div styleName="footer-container">
          <div styleName="brand">Kaon Example</div>
          <div styleName="copyright">&copy;  kaon-example</div>
        </div>
      </Wrapper>
    </div>
  );
}

module.exports = Footer;
