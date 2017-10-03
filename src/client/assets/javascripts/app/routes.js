import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import ApiToken from 'utils/ApiToken';

import App from './App';
import NotFoundView from 'components/NotFound';
import {
  StartPage,
  TestPage,
  TestResultPage
} from 'features';

import UserPage from './UserPage';

export default (store) => {
  const login = (nextState, replace, cb) => {

  };
  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ StartPage } />
      <Route name="test" path="test" component={ TestPage }></Route>
      <Route name="result" path="result" component={ TestResultPage } />
      <Route path="404" component={NotFoundView} />
      <Redirect from="*" to="404" />
    </Route>
  );
}
