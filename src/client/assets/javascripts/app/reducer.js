import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import appReducers from 'app/redux-module/reducers';

export default combineReducers({
  routing,
  appReducers
});
