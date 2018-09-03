import React from 'react';
import PropTypes from 'prop-types';
import loadable from 'loadable-components';
import * as postActionCreators from './actions/post';
import reducers from './reducers';
import generateReducers from '../../../reducers';

const nextReducer = generateReducers(reducers);

const LoadablePost = loadable(() => import(/* webpackChunkName: "posts" */'./PostDetail'), {
  render(renderProps) {
    const {
      Component, loading, ownProps,
    } = renderProps;
    const { store } = ownProps;
    if (loading) {
      return <div className="loading">Loading Desktop Posts...</div>;
    }

    store.replaceReducer(nextReducer());
    return (<Component {...ownProps} />);
  },
});

function Post(props, context) {
  const { store } = context;
  const { match: { params } } = props;
  return <LoadablePost store={store} />;
}

Post.contextTypes = {
  store: PropTypes.object,
};

Post.getInitialProps = (dispatch, params) => dispatch(postActionCreators.fetchPost(params.id));

Post.nextReducer = nextReducer;

module.exports = Post;
