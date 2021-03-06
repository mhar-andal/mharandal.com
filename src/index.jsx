import React, { Component } from 'react';
import { render } from 'react-dom';

import 'styles/styles.scss';
import AppContainer from './AppContainer';
import Routes from './routes';

const App = () => (
  <div>
    <AppContainer>
      <Routes />
    </AppContainer>
  </div>
);

render(<App />, document.getElementById('root'));
