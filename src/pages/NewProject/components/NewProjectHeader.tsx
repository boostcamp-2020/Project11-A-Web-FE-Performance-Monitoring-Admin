import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contentTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: theme.spacing(1),
  },
  contentText: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: '2%',
  },
}));

const NewProjectHeader = () => {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Paper className={classes.paper}>
        <Typography className={classes.contentTitle}>
          당신의 프로젝트를 시작하세요 !
        </Typography>
        <Divider variant="middle" />
        <Typography className={classes.contentText}>
          프로젝트는 여러분의 어플리케이션에서 에러 및 로그 정보들을 수집해서
          여러분의 동료들과 함께 확인할 수 있게 제공하고 있습니다.
          <br />
          지금부터 여러분만의 프로젝트를 만들어보세요.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default NewProjectHeader;
