import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { Docs, Issue } from '@store/type';
import AppbarShift from '../layout/AppbarShift';
import IssueTable from './components/IssueTable';

interface Props {
  issues: Docs<Issue>;
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

const IssueList = ({ issues }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <IssueTable issues={issues} />
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default IssueList;
