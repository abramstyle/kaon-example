import loadable from '@loadable/component';
import * as profileActionCreators from './actions/profile';
import reducers from './reducers';
import generateReducers from '../../../reducers';

import store from '../../../store';

const nextReducer = generateReducers(reducers);
store.replaceReducer(nextReducer());

const Profile = loadable(() => import(/* webpackChunkName: "profile" */'./Profile'));

Profile.getInitialProps = (dispatch, params) => dispatch(profileActionCreators.fetchProfile(params.id));

Profile.nextReducer = nextReducer;

export default Profile;
