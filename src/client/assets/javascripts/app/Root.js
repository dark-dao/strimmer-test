// @flow

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import getRoutes from './routes';
import { config } from './config';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

//window.Raven && Raven.config(config.key).install();

const Root = ({ store, history }) => {
  let ComponentEl = (
    <Provider store={store}>
      <Router history={history} routes={getRoutes(store)} />
    </Provider>
  );

  return ComponentEl;
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
