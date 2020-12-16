import React, { FC, useState } from 'react';
import { useHistory, useRouteMatch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Issue } from '@store/type';

import DetailsTabContainer from '../Details/DetailsTabContainer';
import EventsTabContainer from '../Events/EventsTabContainer';
import IssueTagsContainer from '../Tags/IssueTagsContainer';
import CommentsTabContainer from '../Comments/CommentsTabContainer';

const useStyles = makeStyles({
  root: {
    marginTop: '0.5rem',
    flexGrow: 1,
  },
});

interface Props {
  issue: Issue;
}

const ID_LENGTH = 24;

const IssueTabs: FC<Props> = ({ issue }: Props): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const history = useHistory();
  const match = useRouteMatch();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: string,
  ) => {
    setValue(newValue);
    history.push(`${match.url}${newValue}`);
  };

  window.onpopstate = () => {
    const url = location.href;
    const [lastUrl] = url.split('/').slice(-1);
    if (lastUrl.length === ID_LENGTH) setValue('');
    else setValue(`/${lastUrl}`);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Details" value="" />
        <Tab label="Tags" value="/tags" />
        <Tab label="Events" value="/events" />
        <Tab label="Comments" value="/comments" />
      </Tabs>
      <Route
        exact
        path={`${match.path}`}
        render={() => <DetailsTabContainer events={issue.events} />}
      />
      <Route
        path={`${match.path}/tags`}
        render={() => <IssueTagsContainer issueId={issue._id} />}
      />
      <Route
        path={`${match.path}/events`}
        render={() => <EventsTabContainer issueId={issue._id} />}
      />
      <Route
        path={`${match.path}/comments`}
        render={() => <CommentsTabContainer issueId={issue._id} />}
      />
    </Paper>
  );
};

export default IssueTabs;
