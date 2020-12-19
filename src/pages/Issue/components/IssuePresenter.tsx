import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import { Issue } from '@store/type';
import AppbarShift from '../../layout/AppbarShift';
import IssueTabs from './IssueTabs';
import IssueHeader from './IssueHeader';

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

const IssuePresenter: FC<Props> = ({ issue }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <IssueHeader issue={issue} />
          <IssueTabs issue={issue} />
        </Container>
      </main>
    </div>
  );
};

export default IssuePresenter;
