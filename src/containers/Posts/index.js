import React from 'react';
import Loadable from 'react-loadable';

const LoadablePosts = Loadable({
  /* webpackChunkName: "[request]" */
  loader: () => import('./Posts'),
  loading() {
    return <div>Loading...</div>;
  },
});

function Posts() {
  return <LoadablePosts />;
}

export default Posts;
