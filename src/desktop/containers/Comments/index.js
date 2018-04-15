import React from 'react';
import PropTypes from 'prop-types';
import * as commentActionCreators from './actions/comments';
import reducers from './reducers';
import generateReducers from '../../../reducers';
import LoadableComments from './loadable';

const nextReducer = generateReducers(reducers);

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
