/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_COLLEGES,
  COLLEGES_FAIL,
  COLLEGES_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const requestColleges = () => ({
  type: REQUEST_COLLEGES,
});

export const collegesSuccess = payload => ({
  type: COLLEGES_SUCCESS,
  payload,
});

export const collegesFail = error => ({
  type: COLLEGES_FAIL,
  error,
});
