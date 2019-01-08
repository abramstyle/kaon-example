import { fromJS } from 'immutable';

import actionTypes from '../../../../constants/actionTypes';
import { LOADING_STATES } from '../../../../constants';

const initialState = fromJS({
  loadingState: LOADING_STATES.INITIAL,
  profile: {},
  error: null,
});

function profile(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_REQUEST:
      return state.merge({
        loadingState: LOADING_STATES.LOADING,
      });
    case actionTypes.FETCH_PROFILE_SUCCESS:
      return state.merge({
        loadingState: LOADING_STATES.SUCCESS,
        profile: action.payload,
      });
    case actionTypes.FETCH_PROFILE_FAILURE:
      return state.merge({
        loadingState: LOADING_STATES.FAILURE,
        error: action.payload,
      });
    default:
      return state;
  }
}


export default profile;
