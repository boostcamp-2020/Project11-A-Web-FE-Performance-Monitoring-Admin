import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Login from './login';

const rootElement = document.getElementById('root');

ReactDOM.render(<App>
    <Login />
</App>, rootElement);
