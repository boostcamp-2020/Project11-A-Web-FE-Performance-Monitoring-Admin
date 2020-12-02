import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
interface prop {
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProjectNameInput(props : prop) : JSX.Element{
  const classes = useStyles();
  const [errorText,setErrorText] = useState('');

  return (
    <div className={classes.root}>
      <Typography>
        프로젝트의 이름을 입력해주세요. ( 4글자 이상입력해주시기 바랍니다. )
      </Typography>
      <TextField 
        error={props.projectName.length < 4} 
        helperText={errorText}
        id="standard-basic" 
        label="프로젝트 이름" 
        defaultValue={props.projectName} 
        onChange={({ target: { value } }) => {
          props.setProjectName(value);
          setErrorText((props.projectName.length < 4)?'이름이 너무 짧습니다.':'');
        }} />
    </div>
  )
}