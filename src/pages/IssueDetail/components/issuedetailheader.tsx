
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
})
);


export default function IssueDetailHeader():JSX.Element {
  const classes = useStyles();

  return (
    <Grid container xs={12} spacing={2}>
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
    </Grid>

  )
}