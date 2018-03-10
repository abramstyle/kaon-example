import { combineReducers } from 'redux';

import users from './users';
import localization from './localization';
// import posts from './posts';

const generateReducers = (reducers = {}) => combineReducers({
  // posts,
  users,
  localization,
  // posts,
  ...reducers,
});

export default generateReducers;
