import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './signin';
import SingUp from './signup';
import Project from './project';

export default function Router(): JSX.Element{
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SingUp} />
          <Route exact path="/project" component={Project} />
        </Switch>
      </BrowserRouter>
    );
}