import React from 'react';
import { makeStyles,
  Typography,
  CssBaseline,
  Grid,
 } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
  contentText: {
    margin: theme.spacing(1),
  },
}));

const NewProjectExample = () : JSX.Element => {
  const classes = useStyles();

  const code = `          
  const { init, captureError } = require('@santry/browser');

  const dsn = '[token]@[url]';

  init(dsn);

  const testError = () => {
    try {
      throw new Error('testing Error');
    } catch (error) {
      captureError(error);
    }
  };

  testError();`;
  const scenarios = [
    { contentTitle:"프로젝트를 시작하세요 !", 
    contentText:
  <Typography className={classes.contentText}>
    여러분의 프로젝트가 시작되었습니다. <br/>
    밑의 설명을 잘 읽고 따라해주시기 바랍니다.
  </Typography>},
    { contentTitle:"설치하는 방법", 
    contentText:
  <Typography className={classes.contentText}>
    <SyntaxHighlighter language="powershell" style={dark}>
      $ npm i @santry/browser
    </SyntaxHighlighter>
    다음과 같이 입력하여 설치할 수 있습니다.
  </Typography>},
    { contentTitle:"적용하는 예시", 
    contentText:
  <Typography className={classes.contentText}>
    <SyntaxHighlighter language="javascript" style={dark}>
      {code}
    </SyntaxHighlighter>
    다음과 같이 Santry 따라하면 됩니다 !
  </Typography>},
    { contentTitle:"완벽합니다 !",
    contentText:
  <Typography className={classes.contentText}>
    이제 필요한 것들은 끝났습니다. 이제 오류가 발생하면 , Issues 에 가서 확인할 수 있습니다.
  </Typography>},
  ];


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