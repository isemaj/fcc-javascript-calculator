import React from 'react';
import { hot } from 'react-hot-loader';

import Phone from './Phone';

const App = () => (
  <React.Fragment>
    <Phone />
  </React.Fragment>
);

export default hot(module)(App);
