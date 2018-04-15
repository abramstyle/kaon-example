import React from 'react';
import Loadable from 'loadable-components';
import PropTypes from 'prop-types';
import * as postActionCreators from './actions/posts';
import reducers from './reducers';
import generateReducers from '../../../reducers';

const nextReducer = generateReducers(reducers);

const LoadablePosts = Loadable(() => import(/* webpackChunkName: "posts" */'./Posts'), {
  render({ Component, loading, ownProps }) {
    console.log('loading: ', loading);
    if (loading) {
      return (
        <div className="loading">Loading desktop posts...</div>
      );
    }
    const { store } = ownProps;
    store.replaceReducer(nextReducer());
    // console.log('replace reducer.');
    return <Component />;
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
