import React from 'react';
import PropTypes from 'prop-types';
import loadable from 'loadable-components';
import * as postActionCreators from './actions/posts';
import reducers from './reducers';
import generateReducers from '../../../reducers';

const nextReducer = generateReducers(reducers);

const LoadablePosts = loadable(() => import(/* webpackChunkName: "posts" */'./Posts'), {
  render(renderProps) {
    const { Component, ownProps } = renderProps;
    const { store } = ownProps;

    store.replaceReducer(nextReducer());
    return (<Component {...ownProps} />);
  },
});

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
