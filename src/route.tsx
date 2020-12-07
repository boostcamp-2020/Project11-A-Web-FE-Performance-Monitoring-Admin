import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '@pages/SignIn/signin';
import SingUp from '@pages/SignUp/signup';
import NewProjectContainer from '@pages/NewProject/newProjectContainer';
import ProjectListContainer from '@pages/ProjectList/projectListContainer';
import IssueListContainer from '@/pages/IssueList/IssueListContainer';
import Setting from '@/pages/ProjectSetting/ProjectSetting';
import IssueContainer from '@/pages/Issue/IssueContainer';
import NewProjectExampleContainer from '@/pages/NewProjectExample/NewProjectExampleContainer'

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SingUp} />
        <Route exact path="/newproject" component={NewProjectContainer} />
        <Route exact path="/newprojectexample" component={NewProjectExampleContainer} />
        <Route exact path="/project" component={ProjectListContainer} />
        <Route exact path="/issue" component={IssueListContainer} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/issuedetail/:id" component={IssueContainer} />
      </Switch>
    </BrowserRouter>
  );
}
