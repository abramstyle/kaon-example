import React from 'react';
import Loadable from 'loadable-components';
import PropTypes from 'prop-types';
import * as postActionCreators from './actions/posts';
import reducers from './reducers';
import generateReducers from '../../../reducers';

const nextReducer = generateReducers(reducers);

const LoadablePosts = Loadable(() => import(/* webpackChunkName: "mobile-posts" */'./Posts'), {
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


export default Posts;
