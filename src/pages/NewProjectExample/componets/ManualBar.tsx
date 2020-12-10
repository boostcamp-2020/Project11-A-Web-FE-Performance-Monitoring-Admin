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
    padding: '5px',
  },
}));

interface prop {
  contentTitle: string;
  contentText: JSX.Element;
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
          {props.contentText}
        </Paper>
      </Grid>
    </div>
  );

}
export default ManualBar;