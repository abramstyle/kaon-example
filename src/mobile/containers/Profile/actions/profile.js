import { CALL_API } from '@abramstyle/redux-api';

import actionTypes from '../../../../constants/actionTypes';
import { api } from '../../../../helpers/url';

export function fetchProfile() {
  return {
    [CALL_API]: {
      url: api('/profile'),
      types: [
        actionTypes.FETCH_PROFILE_REQUEST,
        actionTypes.FETCH_PROFILE_SUCCESS,
        actionTypes.FETCH_PROFILE_FAILURE,
      ],
    },
  };
}
