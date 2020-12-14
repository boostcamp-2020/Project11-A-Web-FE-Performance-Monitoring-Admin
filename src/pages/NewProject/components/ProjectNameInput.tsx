import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Grid, Paper, Divider } from '@material-ui/core';

const MIN_PROJECT_NAME_LENGTH = 4;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    contentTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      margin: theme.spacing(1),
    },
    paper: {
      padding: '2%',
    },
  }),
);
interface Props {
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectNameInput = ({
  projectName,
  setProjectName,
}: Props): JSX.Element => {
  const classes = useStyles();
  const [errorText, setErrorText] = useState('');

  const handleChange = ({ target }: any) => {
    const { value } = target;
    setProjectName(value);
    setErrorText(value < MIN_PROJECT_NAME_LENGTH ? '이름이 너무 짧습니다' : '');
  };

  return (
    <Grid item xs>
      <Paper className={classes.paper}>
        <Typography className={classes.contentTitle}>
          프로젝트 이름정하기
        </Typography>
        <Divider variant="middle" />
        <div className={classes.root}>
          <Typography>
            프로젝트의 이름을 입력해주세요. ( 4글자 이상입력해주시기 바랍니다. )
          </Typography>
          <TextField
            error={projectName.length < MIN_PROJECT_NAME_LENGTH}
            helperText={errorText}
            id="standard-basic"
            label="프로젝트 이름"
            defaultValue={projectName}
            onChange={handleChange}
          />
        </div>
      </Paper>
    </Grid>
  );
};
export default ProjectNameInput;
