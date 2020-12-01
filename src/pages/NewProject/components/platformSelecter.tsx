import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

export default function PlatformSelecter() : JSX.Element{
  const classes = useStyles();
  const platfromSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    console.log(event.currentTarget.textContent);
  }

  return (
    <div className={classes.root}>
      <Typography>
        프로젝트의 Platform 을 선택해주세요.
      </Typography>
      <Button variant="outlined" onClick={platfromSelect}>JavsScript</Button>
      <Button variant="outlined" onClick={platfromSelect}>NodeJS</Button>
      <Button variant="outlined" onClick={platfromSelect}>Express</Button>
    </div>
  )
}