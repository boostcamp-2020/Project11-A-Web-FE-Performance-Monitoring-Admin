import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRouter from '@pages/PrivateRouter/PrivateRouter';
import Loading from '@common/Loading';

const SignIn = lazy(() => import('@pages/SignIn/signin'));
const SignUp = lazy(() => import('@pages/SignUp/signup'));
const Github = lazy(() => import('@pages/github/githubHandler'));
const NewProjectContainer = lazy(
  () => import('@pages/NewProject/newProjectContainer'),
);
const ProjectListContainer = lazy(
  () => import('@pages/ProjectList/ProjectListContainer'),
);
const IssueListContainer = lazy(
  () => import('@pages/IssueList/IssueListContainer'),
);
const IssueContainer = lazy(() => import('@pages/Issue/IssueContainer'));
const Setting = lazy(() => import('@pages/ProjectSetting/setting'));

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={Loading}>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/github" component={Github} />
          <PrivateRouter>
            <Route exact path="/newproject" component={NewProjectContainer} />
            <Route exact path="/project" component={ProjectListContainer} />
            <Route exact path="/issue" component={IssueListContainer} />
            <Route exact path="/issuedetail/:id" component={IssueContainer} />
            <Route exact path="/setting" component={Setting} />
          </PrivateRouter>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}
