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
  Paper,
  Divider,
  InputLabel,
  Select,
  MenuItem,
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
    levelBox: {
      marginTop: '10px',
      width: '80%',
    },
    emailBox: {
      border: '1px solid gray',
      height: '300px',
      minWidth: '500px',
    },
    emailText: {
      position: 'absolute',
    },
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
  }),
);
interface Props {
  alertSetting: string;
  alertLevel: string;
  alertMails: string[];
  setAlert: React.Dispatch<React.SetStateAction<string>>;
  setAlertLevel: React.Dispatch<React.SetStateAction<string>>;
  setMails: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProjectAlert = ({
  alertSetting,
  alertMails,
  alertLevel,
  setAlert,
  setAlertLevel,
  setMails,
}: Props): JSX.Element => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlert((event.target as HTMLInputElement).value);
  };

  const handleLevelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAlertLevel(event.target.value as string);
  }

  const handleButtonClick = () => {
    const newMail = (document.getElementById('mailInput') as HTMLInputElement).value;
    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(!emailRule.test(newMail)) {            
                alert("이메일 형식이 맞지 않습니다.");
                return ;
    }
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
    setMails([...alertMails, newMail]);
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
    <Grid item xs>
      <Paper className={classes.paper}>
        <Typography className={classes.contentTitle}>알람설정 하기</Typography>
        <Divider variant="middle" />
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
                  value={alertSetting}
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
                disabled={alertSetting === '거부'}
              />
              <Button
                className={classes.inputSet}
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
                disabled={alertSetting === '거부'}
              >
                넣기
              </Button>
              <FormControl variant="outlined" className={classes.levelBox}>
                <InputLabel id="demo-simple-select-outlined-label">오류 감지 레벨</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={alertLevel}
                  onChange={handleLevelChange}
                  label="ErrorLevel"
                  disabled={alertSetting === '거부'}
                >
                  <MenuItem value={'fatal'} selected>fatal</MenuItem>
                  <MenuItem value={'critical'}>critical</MenuItem>
                  <MenuItem value={'error'}>error</MenuItem>
                  <MenuItem value={'warning'}>warning</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div id="mailBox" className={classes.emailBox} />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};
export default ProjectAlert;
