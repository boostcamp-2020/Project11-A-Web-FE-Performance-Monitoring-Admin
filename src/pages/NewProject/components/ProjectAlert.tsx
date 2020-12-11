import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    radios: {
      height: '100%',
    },
    inputSet: {
      height: '30px',
    },
    emailBox: {
      border: '1px solid gray',
      height: '300px',
      minWidth: '500px',
    },
    emailText: {
      position: 'absolute',
    },
  }),
);
interface prop {
  alertSetting: string;
  alertMails: string[];
  setAlert: React.Dispatch<React.SetStateAction<string>>;
  setMails: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProjectAlert = (props: prop): JSX.Element => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setAlert((event.target as HTMLInputElement).value);
  };

  const handleButtonClick = () => {
    const newText = document.createElement('p');
    newText.textContent = (document.getElementById(
      'mailInput',
    ) as HTMLInputElement).value;
    newText.animate(
      [
        {
          transform: `rotate(0deg)`,
        },
        {
          transform: `translateX(300px)`,
          offset: 0.01,
        },
        {
          transform: `translateX(400px) translateY(100px)`,
          offset: 0.25,
        },
        {
          transform: `translateX(150px) translateY(200px)`,
          offset: 0.5,
        },
        {
          transform: `translateX(0px) translateY(100px)`,
          offset: 0.75,
        },
        {
          transform: `translateX(150px) translateY(0px)`,
          offset: 1,
        },
      ],
      { duration: 30000, iterations: Infinity },
    );
    const newMail = (document.getElementById('mailInput') as HTMLInputElement)
      .value;
    props.setMails([...props.alertMails, newMail]);
    (document.getElementById('mailInput') as HTMLInputElement).value = '';
    newText.className = classes.emailText;
    document.getElementById('mailBox')?.appendChild(newText);
  };

  const animationsPause = () => {
    const animations = document.getAnimations();
    animations.forEach((animation) => animation.pause());
  };
  const animationsPlay = () => {
    const animations = document.getAnimations();
    animations.forEach((animation) => animation.play());
  };

  return (
    <div className={classes.root}>
      <Typography>
        이 옵션은 프로젝트에서 특정한 레벨의 이벤트가 발생했을 때, 그 상황에
        대한 알림을 이메일로 받아볼 수 있게 설정할 수 있습니다.
      </Typography>
      <Grid container>
        <Grid className={classes.radios} item xs={12} sm={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">동의여부</FormLabel>
            <RadioGroup
              aria-label="alert"
              name="alert"
              value={props.alertSetting}
              onChange={handleChange}
            >
              <FormControlLabel
                value="동의"
                control={<Radio />}
                label="동의"
                onClick={animationsPlay}
              />
              <FormControlLabel
                value="거부"
                control={<Radio />}
                label="거부"
                onClick={animationsPause}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography component="legend">
            알람을 받을 이메일을 입력해주세요.
          </Typography>
          <input
            id="mailInput"
            className={classes.inputSet}
            type="text"
            disabled={props.alertSetting === '거부'}
          />
          <Button
            className={classes.inputSet}
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            disabled={props.alertSetting === '거부'}
          >
            넣기
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="mailBox" className={classes.emailBox} />
        </Grid>
      </Grid>
    </div>
  );
};
export default ProjectAlert;
