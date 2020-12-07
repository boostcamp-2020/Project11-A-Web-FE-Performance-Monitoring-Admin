import React from 'react';
import { makeStyles,CssBaseline } from '@material-ui/core';
import AppbarShift from '../layout/appbarshift';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
  },
}));


const NewProjectExample = () : JSX.Element => {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
    </div>
  );

}
export default NewProjectExample;