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
import Background from '@public/img/background.jpg';
import SantryEye from '@public/img/santry_eye.png';
import SantryWithoutEye from '@public/img/santry_noeye.png';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
  },
  backgroundMove: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
    animation: `$fadeIn 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  logo: {
    marginTop: -14,
    width: '400px',
    zIndex: 1,
  },
  eye: {
    zIndex: 2,
    height: '60px',
    position: 'relative',
    right: '-158.5px',
    top: '70px',
    perspective: '400px',
  },
  paper: {
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
    zIndex: 1,
    animation: `$riseUp 3000ms ${theme.transitions.easing.easeInOut}`,
    animationPlayState: 'paused',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  github: {
    margin: theme.spacing(3, 0, 2),
  },
  '@keyframes riseUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
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
    { duration: 4000, iterations: Infinity },
  );
};
const pwAnimationPlay = () => {
  document.getElementById('eye')?.animate(
    [
      {
        transform: 'rotateX(0deg) rotateY(0deg)',
        offset: 0,
      },
      {
        transform: 'rotateX(70deg) rotateY(15deg)',
        offset: 0.1,
      },
      {
        transform: 'rotateX(70deg) rotateY(15deg)',
        offset: 0.35,
      },
      {
        transform: 'rotateX(70deg) rotateY(-30deg)',
        offset: 0.4,
      },
      {
        transform: 'rotateX(70deg) rotateY(-30deg)',
        offset: 0.6,
      },
      {
        transform: 'rotateX(70deg) rotateY(30deg)',
        offset: 0.65,
      },
      {
        transform: 'rotateX(70deg) rotateY(30deg)',
        offset: 0.9,
      },
      {
        transform: 'rotateX(0deg) rotateY(0deg)',
        offset: 1,
      },
    ],
    { duration: 6000, iterations: Infinity },
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
  const [ment, setMent] = useState('Click Me');

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
  const backGroundChange = () => {
    const animations = document.getAnimations();
    const back = document.getElementById('background');
    animations.forEach((animation) => animation.play());
    if (back) {
      back.className = classes.backgroundMove;
    }
    setMent('Sign in');
  };

  return (
    <div id="background" className={classes.background}>
      <Container component="main" maxWidth="xs">
        <div onClick={backGroundChange}>
          <img src={SantryEye} className={classes.eye} id="eye" alt="eye" />
          <img src={SantryWithoutEye} className={classes.logo} alt="logo" />
        </div>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {ment}
          </Typography>
          <form id="form" className={classes.form}>
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
    </div>
  );
}
