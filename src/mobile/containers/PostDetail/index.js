import loadable from '@loadable/component';
import * as postActionCreators from './actions/post';
import reducers from './reducers';
import generateReducers from '../../../reducers';

import store from '../../../store';

const nextReducer = generateReducers(reducers);
store.replaceReducer(nextReducer());

const Post = loadable(() => import(/* webpackChunkName: "posts" */'./PostDetail'));

Post.getInitialProps = (dispatch, params) => dispatch(postActionCreators.fetchPost(params.id));

Post.nextReducer = nextReducer;

export default Post;
