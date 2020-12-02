import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  alertSetting: string;
  setAlert: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectAlert = (props : prop) : JSX.Element =>{
  const classes = useStyles();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setAlert((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        프로젝트 알람 설정
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">동의여부</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={props.alertSetting} onChange={handleChange}>
          <FormControlLabel value="동의" control={<Radio />} label="동의" />
          <FormControlLabel value="거부" control={<Radio />} label="거부" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
export default ProjectAlert;