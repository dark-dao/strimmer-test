/* eslint-disable no-constant-condition */
import { take, takeEvery, put, call, fork, select } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { TEST_DATA, selectAnswer, resetTest, setDisputAnswers } from '../actions/testData';

export function* testData() {
  while(true) {
    try {
      const data = yield take([TEST_DATA.SELECT_ANSWER, TEST_DATA.RESET, TEST_DATA.SET_DISPUT_ANSWERS]);
      console.log(data);
      if(data.reset) {
        browserHistory.push('/test');
      }
      if(data.disput) {
        browserHistory.push('/special');
      }
    } catch (err) {
      //yield put(userInfoFailure(err));
    }
  }
}
