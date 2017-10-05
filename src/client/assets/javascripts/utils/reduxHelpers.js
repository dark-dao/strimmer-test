'use strict';
/* eslint-disable arrow-parens, babel/arrow-parens */
export function createRequestTypes(base) {
  const res = {};
  ['REQUEST', 'SUCCESS', 'FAILURE', 'SELECT_ANSWER', 'RESET', 'SET_DISPUT_ANSWERS'].forEach(type => { res[type] = `${base}_${type}`; });
  return res;
}

export const createActions = (requestTypes, requestHandler, successHandler) => ({
  request: requestHandler || (filter => ({ type: requestTypes.REQUEST, filter })),
  success: successHandler || (data => ({ type: requestTypes.SUCCESS, data })),
  failure: errorMessage => ({ type: requestTypes.FAILURE, errorMessage }),
});

export const createReducer = (actionTypes, initialState) => (
  (state = initialState, action = {}) => {
    switch (action.type) {
      case actionTypes.REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actionTypes.SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false,
          successMessage: 'Success',
        };
      default:
        return state;
    }
  }
);
