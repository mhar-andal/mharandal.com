import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import About from 'pages/About';
import Homepage from 'pages/Homepage';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/test" component={About} />
    </Switch>
  </Router>
);

export default Routes;
