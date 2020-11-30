import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Router from './route';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div>
    <App />
    <Router />
  </div>, rootElement);
