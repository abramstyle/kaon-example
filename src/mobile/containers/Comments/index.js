import React from 'react';
import Loadable from 'loadable-components';
import PropTypes from 'prop-types';
import * as commentActionCreators from './actions/comments';
import reducers from './reducers';
import generateReducers from '../../../reducers';

const nextReducer = generateReducers(reducers);

const LoadableComments = Loadable(() => import(/* webpackChunkName: "mobile-comments" */'./Comments'), {
  render(loaded, loading, props) {
    const { store } = props;
    store.replaceReducer(nextReducer());
    // console.log('replace reducer.');
    const Component = loaded.default;
    return <Component />;
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
