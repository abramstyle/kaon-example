import { combineReducers } from 'redux';
// import { Map } from 'immutable';

import users from './users';
import localization from './localization';
// import posts from './posts';
// import comments from './comments';

const reducers = {
  users,
  localization,
  // posts,
  // comments,
};

const generateReducers = (asyncReducers = {}) => (state = {}) => {
  Object.assign(reducers, {
    ...asyncReducers,
  });

  Object.keys(state).forEach((key) => {
    if (!reducers[key]) {
      Object.assign(reducers, {
        [key]: () => state[key],
      });
    }
  });

  return combineReducers(reducers);
};

export default generateReducers;
