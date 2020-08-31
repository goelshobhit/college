import { put, takeLatest, delay } from 'redux-saga/effects';
import { REQUEST_COLLEGES } from './constants';
import { collegesSuccess, collegesFail } from './actions';
import CollegeData from '../../assests/colleges.json';

function* requestColleges() {
  try {
    yield delay(1000);
    yield put(collegesSuccess(CollegeData));
  } catch (e) {
    yield put(collegesFail(e));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(REQUEST_COLLEGES, requestColleges);
}
