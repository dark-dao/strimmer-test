'use strict';
import { take, call, all, put, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../../../utils/ApiClient';

import { testData } from './testData';
export function* rootSaga() {
  yield all([
    testData()
  ]);
}
