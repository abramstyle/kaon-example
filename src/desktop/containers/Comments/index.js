import React from 'react';
import PropTypes from 'prop-types';
import loadable from 'loadable-components';
import * as commentActionCreators from './actions/comments';
import reducers from './reducers';
import generateReducers from '../../../reducers';

const nextReducer = generateReducers(reducers);

const LoadableComments = loadable(() => import(/* webpackChunkName: "comments" */'./Comments'), {
  render(renderProps) {
    const { Component, loading, ownProps } = renderProps;
    const { store } = ownProps;
    if (loading) {
      return <div className="loading">Loading Desktop Comments...</div>;
    }

    store.replaceReducer(nextReducer());
    return (<Component {...ownProps} />);
  },
});

function Comments(props, context) {
  const { store } = context;
  return <LoadableComments store={store} />;
}

Comments.contextTypes = {
  store: PropTypes.object,
};

Comments.getInitialProps = dispatch => dispatch(commentActionCreators.fetchComments({
  _page: 1,
  _limit: 5,
}));

Comments.nextReducer = nextReducer;


export default Comments;
