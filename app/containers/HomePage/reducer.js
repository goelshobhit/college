/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { concat } from 'lodash';
import { COLLEGE_LIMIT, COLLEGE_SKIP } from 'containers/App/constants';
import { REQUEST_COLLEGES, COLLEGES_SUCCESS, COLLEGES_FAIL } from './constants';

export const initialState = {
  hasMore: true,
  loading: false,
  data: [],
  error: {},
  offset: COLLEGE_LIMIT,
  skip: COLLEGE_SKIP,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_COLLEGES:
        draft.loading = true;
        break;
      case COLLEGES_SUCCESS:
        if (action.payload.length < COLLEGE_LIMIT) {
          draft.hasMore = false;
        }
        draft.loading = false;
        draft.data = concat(draft.data, action.payload);
        draft.skip = draft.offset;
        draft.offset += COLLEGE_LIMIT;
        break;
      case COLLEGES_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default homePageReducer;
