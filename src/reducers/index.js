import { combineReducers } from 'redux';

import posts from './posts';

const reducers = combineReducers({
  posts,
});

export default reducers;
