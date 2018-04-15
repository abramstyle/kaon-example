import React from 'react';
import PropTypes from 'prop-types';
import * as postActionCreators from './actions/posts';
import reducers from './reducers';
import generateReducers from '../../../reducers';
import LoadablePosts from './loadable';

const nextReducer = generateReducers(reducers);

function Posts(props, context) {
  const { store } = context;
  return <LoadablePosts store={store} />;
}

Posts.contextTypes = {
  store: PropTypes.object,
};

Posts.getInitialProps = dispatch => dispatch(postActionCreators.fetchPosts({
  _page: 1,
  _limit: 5,
}));

Posts.nextReducer = nextReducer;

module.exports = Posts;
