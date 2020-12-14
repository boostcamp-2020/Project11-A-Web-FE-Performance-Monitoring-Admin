import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRouter from '@pages/PrivateRouter/PrivateRouter';
import Loading from '@common/Loading';

const SignIn = lazy(
  () => import(/* webpackChunkName: "SiginIn" */ '@pages/SignIn/SignIn'),
);
const SignUp = lazy(
  () => import(/* webpackChunkName: "SiginUp" */ '@pages/SignUp/SignUp'),
);
const Github = lazy(
  () => import(/* webpackChunkName: "Github" */ '@pages/github/githubHandler'),
);
const NewProjectContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "NewProject" */ '@pages/NewProject/NewProjectContainer'
    ),
);

const NewProjectExampleContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "NewProjectExample" */ '@pages/NewProjectExample/NewProjectExampleContainer'
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
const ProjectSettingContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "Setting" */ '@pages/ProjectSetting/ProjectSettingContainer'
    ),
);

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/github" component={Github} />
          <PrivateRouter>
            <Route path="/newproject" component={NewProjectContainer} />
            <Route
              path="/newproject/example"
              component={NewProjectExampleContainer}
            />
            <Route path="/project" component={ProjectListContainer} />
            <Route path="/issue" component={IssueListContainer} />
            <Route path="/issuedetail/:id" component={IssueContainer} />
            <Route path="/setting" component={ProjectSettingContainer} />
          </PrivateRouter>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
