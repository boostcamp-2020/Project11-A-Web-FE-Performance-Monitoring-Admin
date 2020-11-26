import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './signin';
import SingUp from './signup';
import Project from './projectlist';
import NewProject from './newproject';
import IssueList from './issuelist';
import Setting from './setting';
import IssueDetail from './issuedetail';

export default function Router(): JSX.Element{
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SingUp} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/newproject" component={NewProject} />
          <Route exact path="/issue" component={IssueList} />
          <Route exact path="/setting" component={Setting} />
          <Route exact path="/issuedetail/:id" component={IssueDetail} />
        </Switch>
      </BrowserRouter>
    );
}