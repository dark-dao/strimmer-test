'use strict';
import { createRequestTypes } from 'utils/reduxHelpers';

const TEST_DATA = createRequestTypes('TEST_DATA');
export { TEST_DATA };
export function selectAnswer(strimmerInfo) {
  console.log(strimmerInfo);
  //strimmerInfo = {id: number, weight: number}
  return {
    type: TEST_DATA.SELECT_ANSWER,
    selectedAnswer: strimmerInfo
  };
};

export function resetTest() {
  return {
    type: TEST_DATA.RESET,
    reset: true
  };
};
// export function userInfoFailure(errorMessage) {
//   return {
//     type: USER_INFO.FAILURE,
//     errorMessage,
//   };
// }
