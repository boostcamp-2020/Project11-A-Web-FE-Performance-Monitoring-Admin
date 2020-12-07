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

const scenarios = [
  { contentTitle:"프로젝트를 시작하세요 !", contentText:"프로젝트 123"},
  { contentTitle:"설치하는 방법", contentText:"설치하는 방법"},
  { contentTitle:"적용하는 예시", contentText:"설치하는 방법"},
  { contentTitle:"완벽합니다 !", contentText:"설치하는 방법"},
];

const NewProjectExample = () : JSX.Element => {
  const classes = useStyles();

  return ( 
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={3}>
          {scenarios.map((scenario) => (
            <ManualBar key={scenario.contentTitle} {...scenario} />
          ))}
        </Grid>
      </main>
    </div>
  );

}
export default NewProjectExample;