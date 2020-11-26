
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import AppbarShift from './appbarshift';
import IssueDetailTabs from './issuedetailtap';
import { Paper } from '@material-ui/core';

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
  paper: {
    padding: theme.spacing(2),
  }
}));

export default function IssueDetail():JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                hi
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                hi
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <IssueDetailTabs />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}