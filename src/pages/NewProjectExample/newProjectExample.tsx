import React from 'react';
import { makeStyles,
  CssBaseline,
  Grid,
 } from '@material-ui/core';
import AppbarShift from '../layout/appbarshift';
import ManualBar from './componets/manualBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    paddingTop: '2%',
    paddingLeft: '2%',
    width: '80%',
  },
}));

const scenario = [];

const NewProjectExample = () : JSX.Element => {
  const classes = useStyles();

  return ( 
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={3}>
          <ManualBar headTitle={"hi"} />
          <ManualBar headTitle={"bye"} />
        </Grid>
      </main>
    </div>
  );

}
export default NewProjectExample;