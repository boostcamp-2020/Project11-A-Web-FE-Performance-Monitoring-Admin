import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  CssBaseline,
  Grid,
  Button,
} from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AppbarShift from '../../layout/AppbarShift';
import ManualBar from './ManualBar';

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
    padding: '5px 5px 20px 5px',
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
interface prop {
  token: string;
  platform: string;
}
const NewProjectExample = (props: prop): JSX.Element => {
  const classes = useStyles();
  let suffix = 'node';
  switch(props.platform){
    case 'JavaScript':
      suffix = 'browser';
      break;
    case 'NodeJS':
      suffix = 'node';
      break;
    case 'Express':
      suffix = 'node';
      break;
    default:
      suffix = 'node'
  }
  
  const npm = `$ npm i @santry/${suffix}`;
  const code =
    props.platform !== 'Express'
      ? `          
  const { init, captureError } = require('@santry/${suffix}');

  const dsn = '${props.token}@118.67.129.120:3000/sdk/event';

  init(dsn);

  const testError = () => {
    try {
      throw new Error('testing Error');
    } catch (error) {
      captureError(error);
    }
  };

  testError();`
      : `
  // All controllers should live here
  const express = require('express');
  const {
    init,
    errorHandler,
    captureMessage,
    setContext,
  } = require('@santry/node');

  const app = express();
  const dsn = '${props.token}@118.67.129.120:3000/sdk/event';

  init(dsn, {
    traceSampleRate: 1,
    release: 'santry@0.0.1',
    environment: 'production',
  });

  app.get('/', function rootHandler(req, res) {
    res.end('Hello world!');
  });

  app.post('/debug-sentry', function mainHandler(req, res) {
    setContext('myInfo', {
      name: 'Hera',
      age: 26,
    });
    captureMessage("helllo I'm Hera");
    throw new Error('My second Sentry error get!');
  });
  // The error handler must be before any other error middleware and after all controllers
  app.use(errorHandler());
  // Optional fallthrough error handler
  app.use(function onError(err, req, res, next) {
    res.statusCode = 500;
    res.end('good santry!');
  });

  app.listen(3000);
  `;
  const scenarios = [
    {
      contentTitle: '프로젝트를 시작하세요 !',
      contentText: (
        <Typography className={classes.contentText}>
          여러분의 프로젝트가 시작되었습니다.
          <br />
          밑의 설명을 잘 읽고 따라해주시기 바랍니다.
        </Typography>
      ),
    },
    {
      contentTitle: '설치하는 방법',
      contentText: (
        <div className={classes.contentText}>
          <SyntaxHighlighter language="powershell" style={dark}>
            {npm}
          </SyntaxHighlighter>
          <Typography className={classes.contentText}>
            다음과 같이 입력하여 설치할 수 있습니다.
          </Typography>
        </div>
      ),
    },
    {
      contentTitle: '적용하는 예시',
      contentText: (
        <div className={classes.contentText}>
          <SyntaxHighlighter language="javascript" style={dark}>
            {code}
          </SyntaxHighlighter>
          <Typography>다음과 같이 Santry 따라하면 됩니다 !</Typography>
        </div>
      ),
    },
    {
      contentTitle: '완벽합니다 !',
      contentText: (
        <Typography className={classes.contentText}>
          이제 필요한 것들은 끝났습니다. 이제 오류가 발생하면 , Issues 에 가서
          확인할 수 있습니다.
        </Typography>
      ),
    },
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
          <Grid item xs={12} className={classes.buttonWrap}>
            <Link to="/project" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                프로젝트 리스트로 돌아가기
              </Button>
            </Link>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default NewProjectExample;
