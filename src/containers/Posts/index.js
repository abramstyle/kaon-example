import React from 'react';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import * as postActionCreators from '../../actions/posts';
import reducers from './reducers';
import generateReducers from '../../reducers';

const nextReducer = generateReducers(reducers);

const LoadablePosts = Loadable.Map({
  loader: {
    component: () => import('./Posts'),
    style: () => import('./style.css'),
  },
  loading() {
    return <div>Loading Post Component...</div>;
  },

  render(loaded, props) {
    const { store } = props;
    store.replaceReducer(nextReducer());
    // console.log('replace reducer.');
    const Component = loaded.component.default;
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
