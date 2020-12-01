import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
  seletedPlatform: string;
  projectName: string;
}

export default function StepperResult(props : prop) : JSX.Element{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        프로젝트 선택의 결과
      </Typography>
      <Typography>
        {props.seletedPlatform}
      </Typography>
      <Typography>
        {props.projectName}
      </Typography>
    </div>
  )
}