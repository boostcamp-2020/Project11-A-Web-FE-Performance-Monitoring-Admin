import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import login from '@api/auth/login';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser } from '@store/user/userActions';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: theme.spacing(3),
    width: '400px',
    zIndex: 1,
  },
  eye: {
    zIndex: 2,
    height: '60px',
    position: 'relative',
    right: '-158.5px',
    top: '110px',
    perspective: '400px',
  },
  paper: {
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  github: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const idAnimationPlay = () => {
  document.getElementById('eye')?.animate(
    [
      {
        transform: 'rotateX(0deg) rotateY(0deg) translateY(0px)',
      },
      {
        transform: 'rotateX(-30deg) rotateY(30deg) translateY(10px)',
      },
      {
        transform: 'rotateX(-30deg) rotateY(0deg) translateY(5px)',
      },
      {
        transform: 'rotateX(-30deg) rotateY(-30deg) translateY(0px)',
      },
      {
        transform: 'rotateX(-30deg) rotateY(0deg) translateY(5px)',
      },
      {
        transform: 'rotateX(-30deg) rotateY(30deg) translateY(10px)',
      },
      {
        transform: 'rotateX(0deg) rotateY(0deg) translateY(0px)',
      },
    ],
    { duration: 10000, iterations: Infinity },
  );
};
const pwAnimationPlay = () => {
  document.getElementById('eye')?.animate(
    [
      {
        transform: 'rotateX(0deg) rotateY(0deg) translateY(0px)',
      },
      {
        transform: 'rotateX(10deg) rotateY(15deg) translateY(5px)',
      },
      {
        transform: 'rotateX(70deg) rotateY(30deg) translateY(10px)',
      },
      {
        transform: 'rotateX(70deg) rotateY(0deg) translateY(5px)',
      },
      {
        transform: 'rotateX(70deg) rotateY(-30deg) translateY(0px)',
      },
      {
        transform: 'rotateX(70deg) rotateY(0deg) translateY(5px)',
      },
      {
        transform: 'rotateX(60deg) rotateY(30deg) translateY(10px)',
      },
      {
        transform: 'rotateX(10deg) rotateY(15deg) translateY(5px)',
      },
      {
        transform: 'rotateX(0deg) rotateY(0deg) translateY(0px)',
      },
    ],
    { duration: 10000, iterations: Infinity },
  );
};

const AnimationDefault = () => {
  document.getElementById('eye')?.animate(
    [
      {
        transform: 'translateY(0px)',
      },
      {
        transform: 'translateY(5px)',
      },
      {
        transform: 'translateY(10px)',
      },
      {
        transform: 'translateY(5px)',
      },
      {
        transform: 'translateY(0px)',
      },
    ],
    { duration: 5000, iterations: Infinity },
  );
};

export default function SignIn(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const user = await login(email, password);
      dispatch(setUser(user.email, user.nickname, user._id));
      history.push('/project');
    } catch (error) {
      alert(error.response.data.message || '로그인에 실패하였습니다!');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <img
        src="public/img/santry_eye.png"
        className={classes.eye}
        id="eye"
        alt="eye"
      />
      <img
        src="public/img/santry_noeye.png"
        className={classes.logo}
        alt="logo"
      />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={({ target: { value } }) => setEmail(value)}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onFocus={idAnimationPlay}
            onBlur={AnimationDefault}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={({ target: { value } }) => setPassword(value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onFocus={pwAnimationPlay}
            onBlur={AnimationDefault}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            onClick={handleClick}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            href={`${process.env.API_URL}/api/auth/github`}
            color="primary"
            className={classes.github}
          >
            <GitHubIcon />
            &nbsp;Sign In With Github
          </Button>
          <Grid container>
            <Grid item xs />
            <Grid item>
              <Link href="/signup">Don&apos;t have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
