import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { LockOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import join from '@api/auth/join';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(): JSX.Element {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      join(email, password);
    } catch (error) {
      alert('회원가입을 실패하였습니다 !');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography component="h1">
                사용하실 이메일을 이메일형식에 맞게 입력해주세요.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={({ target: { value } }) => setEmail(value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="h1">
                비밀번호는 대문자1자, 소문자1자, 숫자1자, 특수문자1개 이상 8자리 이상 입력해주세요.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={({ target: { value } }) => setPassword(value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            onClick={handleClick}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
