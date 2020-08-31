import { put, takeLatest, delay, select } from 'redux-saga/effects';
import { REQUEST_COLLEGES } from './constants';
import { collegesSuccess, collegesFail } from './actions';
import makeSelectHomePage from './selectors';
import CollegeData from '../../assests/colleges.json';

function* requestColleges() {
  const homePage = yield select(makeSelectHomePage());
  const { offset, skip } = homePage;
  try {
    yield delay(1000);
    const response = CollegeData.colleges.slice(skip, offset);
    yield put(collegesSuccess(response));
  } catch (e) {
    yield put(collegesFail(e));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(REQUEST_COLLEGES, requestColleges);
}
