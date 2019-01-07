import { CALL_API } from '@abramstyle/redux-api';

import actionTypes from '../../../../constants/actionTypes';
import { api } from '../../../../helpers/url';

export function fetchPost(id) {
  return {
    [CALL_API]: {
      url: api(`/posts/${id}`),
      types: [
        actionTypes.FETCH_POST_REQUEST,
        actionTypes.FETCH_POST_SUCCESS,
        actionTypes.FETCH_POST_FAILURE,
      ],
    },
  };
}
