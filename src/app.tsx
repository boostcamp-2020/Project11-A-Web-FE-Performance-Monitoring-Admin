import React, { FunctionComponent } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '@themes/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@state/store';
import Router from './route';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

const App: FunctionComponent = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  </Provider>
);

export default App;
