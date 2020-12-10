import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRouter from '@pages/PrivateRouter/PrivateRouter';
import Loading from '@common/Loading';

const SignIn = lazy(
  () => import(/* webpackChunkName: "SiginIn" */ '@pages/SignIn/signin'),
);
const SignUp = lazy(
  () => import(/* webpackChunkName: "SiginUp" */ '@pages/SignUp/signup'),
);
const Github = lazy(
  () => import(/* webpackChunkName: "Github" */ '@pages/github/githubHandler'),
);
const NewProjectContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "NewProject" */ '@pages/NewProject/newProjectContainer'
    ),
);
const ProjectListContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "ProjectList" */ '@pages/ProjectList/ProjectListContainer'
    ),
);
const IssueListContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "IssueList" */ '@pages/IssueList/IssueListContainer'
    ),
);
const IssueContainer = lazy(
  () => import(/* webpackChunkName: "Issue" */ '@pages/Issue/IssueContainer'),
);
const Setting = lazy(
  () =>
    import(/* webpackChunkName: "Setting" */ '@pages/ProjectSetting/ProjectSettingContainer'),
);

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
