import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Grid, Paper, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      flexGrow: 1,
    },
    contentTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      margin: theme.spacing(1),
      padding: '5px',
    },
    contentBody: {
      marginLeft: '20px',
      marginBottom: '20px',
    },
  }),
);
interface prop {
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectNameInput = (props: prop): JSX.Element => {
  const classes = useStyles();
  const [errorText, setErrorText] = useState('');

  return (
    <Grid item xs={12}>
      <Paper>
        <Typography className={classes.contentTitle}>
          프로젝트 이름
        </Typography>
        <Divider variant="middle" />
        <br />
        <TextField
          className={classes.contentBody}
          error={props.projectName.length < 4}
          helperText={errorText}
          id="standard-basic"
          label="프로젝트 이름"
          defaultValue={props.projectName}
          onChange={({ target: { value } }) => {
            props.setProjectName(value);
            setErrorText(
              props.projectName.length < 4 ? '이름이 너무 짧습니다.' : '',
            );
          }}
        />
      </Paper>
    </Grid>
  );
};
export default ProjectNameInput;
