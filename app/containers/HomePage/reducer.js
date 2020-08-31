/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { REQUEST_COLLEGES, COLLEGES_SUCCESS, COLLEGES_FAIL } from './constants';

export const initialState = {
  hasMore: false,
  loading: false,
  data: [],
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_COLLEGES:
        draft.loading = true;
        break;
      case COLLEGES_SUCCESS:
        draft.loading = false;
        draft.hasMore = true;
        draft.data = action.payload.colleges;
        break;
      case COLLEGES_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default homePageReducer;
