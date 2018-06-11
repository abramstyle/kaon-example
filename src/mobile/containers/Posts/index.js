import React from 'react';
import Loadable from 'loadable-components';
import PropTypes from 'prop-types';
import * as postActionCreators from './actions/posts';
import reducers from './reducers';
import generateReducers from '../../../reducers';

const nextReducer = generateReducers(reducers);

const LoadablePosts = Loadable(() => import(/* webpackChunkName: "mobile-posts" */'./Posts'), {
  render(renderProps) {
    const { Component, ownProps, loading } = renderProps;
    const { store } = ownProps;

    if (loading) {
      return <div className="loading">Loading Desktop Posts...</div>;
    }
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


export default Posts;
