import React from 'react';
import { makeStyles,
  Typography,
  Grid,
  Paper,
  Divider,
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
  },
  contentTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: theme.spacing(1),
  },
  contentText: {
    margin: theme.spacing(1),
  },
}));

interface prop {
  contentTitle: string;
  contentText: string;
}
const ManualBar = (props: prop) : JSX.Element => {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper>
          <Typography className={classes.contentTitle}>
            {props.contentTitle}
          </Typography>
          <Divider variant="middle" />
          <Typography className={classes.contentText}>
            {props.contentText}
          </Typography>
        </Paper>
      </Grid>
    </div>
  );

}
export default ManualBar;