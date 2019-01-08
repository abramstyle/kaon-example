import loadable from '@loadable/component';
import * as commentActionCreators from './actions/comments';
import reducers from './reducers';
import generateReducers from '../../../reducers';

import store from '../../../store';

const nextReducer = generateReducers(reducers);
store.replaceReducer(nextReducer());

const Comments = loadable(() => import(/* webpackChunkName: "comments" */'./Comments'));

Comments.getInitialProps = dispatch => dispatch(commentActionCreators.fetchComments({
  _page: 1,
  _limit: 5,
}));

Comments.nextReducer = nextReducer;


export default Comments;
