import React from 'react';
import Loadable from 'react-loadable';
import * as postActionCreators from '../../actions/posts';

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

Posts.getInitialProps = dispatch => dispatch(postActionCreators.fetchPosts({
  _page: 1,
  _limit: 5,
}));


export default Posts;
