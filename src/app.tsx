import React, { FunctionComponent } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '@themes/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@store/store';
import Router from './route';

const curProject = localStorage.getItem('curProject');
const persistedState = curProject ? JSON.parse(curProject) : {};
const initialState = { curProjectReducer: persistedState };

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

store.subscribe(() => {
  const projectId = store.getState().curProjectReducer;
  localStorage.setItem('curProject', JSON.stringify(projectId));
});

const App: FunctionComponent = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  </Provider>
);

export default App;
