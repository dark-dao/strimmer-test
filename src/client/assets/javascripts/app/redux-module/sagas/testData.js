/* eslint-disable no-constant-condition */
import { take, takeEvery, put, call, fork, select } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { TEST_DATA, selectAnswer, resetTest } from '../actions/testData';

export function* testData() {
  while(true) {
    try {
      const data = yield take([TEST_DATA.SELECT_ANSWER, TEST_DATA.RESET]);

      if(data.reset) {
        browserHistory.push('/test');
        //yield put(userInfoSuccess(request.user.local));

      } else {
        //yield put(userInfoFailure(request));
      }
    } catch (err) {
      //yield put(userInfoFailure(err));
    }
  }
}
