import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './signin';

export default function Router(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />

        </Switch>
      </BrowserRouter>
    );
}