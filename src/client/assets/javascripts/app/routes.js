import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import ApiToken from 'utils/ApiToken';

import App from './App';
import NotFoundView from 'components/NotFound';
import {
  TestPage,
  TestResultPage
} from 'features';

import UserPage from './UserPage';

export default (store) => {
  const login = (nextState, replace, cb) => {

  };
  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ TestPage } />
      <Route name="result" path="result" component={ TestResultPage } />
      <Route path="404" component={NotFoundView} />
      <Redirect from="*" to="404" />
    </Route>
  );
}
