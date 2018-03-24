import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from 'pages/About';
import Homepage from 'pages/Homepage';

export default (
  <Switch>
    <Route path="/" component={Homepage} />
    <Route path="/about" component={About} />
  </Switch>
);
