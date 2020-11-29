import React, { FunctionComponent } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '@themes/index';
import Router from './route';

const App: FunctionComponent = () => (
  <MuiThemeProvider theme={theme}>
    <Router />
  </MuiThemeProvider>
);

export default App;
