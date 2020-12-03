import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import { Issue } from '@state/type';
import AppbarShift from '../layout/appbarshift';
import IssueTabs from './components/IssueTabs';
import IssueHeader from './components/IssueHeader';

interface Props {
  issue: Issue;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Issue: FC<Props> = ({ issue }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <IssueHeader issue={issue} />
          <IssueTabs />
        </Container>
      </main>
    </div>
  );
};

export default Issue;
