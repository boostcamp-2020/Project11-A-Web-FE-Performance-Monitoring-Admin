import React from 'react';
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
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProjectNameInput(props : prop) : JSX.Element{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        프로젝트의 이름을 선택해주세요.
      </Typography>
      <TextField id="standard-basic" label="Standard" onChange={({ target: { value } }) => props.setProjectName(value)} />
    </div>
  )
}