import { fromJS } from 'immutable';

import { LOADING_STATES } from '../../../../constants';
import actionTypes from '../../../../constants/actionTypes';

const initialState = fromJS({
  loadingState: LOADING_STATES.INITIAL,
  error: null,
  post: {},
  page: 1,
});

function posts(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_POST_REQUEST:
      return state.set('loadingState', LOADING_STATES.LOADING);
    case actionTypes.FETCH_POST_SUCCESS:
      return state.merge({
        loadingState: LOADING_STATES.SUCCESS,
        post: fromJS(action.payload),
      });
    case actionTypes.FETCH_POST_FAILURE:
      return state.merge({
        loadingState: LOADING_STATES.FAILURE,
        error: action.payload,
      });
    default:
      return state;
  }
}

export {
  initialState,
  posts as default,
};
