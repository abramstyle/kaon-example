import loadable from '@loadable/component';
import * as postsActionCreators from './actions/posts';
import reducers from './reducers';
import generateReducers from '../../../reducers';

import store from '../../../store';

const nextReducer = generateReducers(reducers);
store.replaceReducer(nextReducer());

const Posts = loadable(() => import(/* webpackChunkName: "posts" */'./Posts'));

Posts.getInitialProps = dispatch => dispatch(postsActionCreators.fetchPosts({
  _page: 1,
  _limit: 5,
}));

Posts.nextReducer = nextReducer;

export default Posts;
