'use strict';
import { combineReducers, applyMiddleware } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import testData from './testData';

export default combineReducers({
  routing,
  testData
});
