import React from 'react';
import Loadable from 'react-loadable';

const LoadableDesktopApp = Loadable({
  loader: import(/* webpackChunkName: 'desktop' */'./App'),
  loading() {
    return <div>Loading Desktop Component...</div>;
  },
});

export default LoadableDesktopApp;
