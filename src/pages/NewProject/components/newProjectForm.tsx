import React , { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PlatformSelecter from './platformSelecter';
import ProjectNameInput from './projectNameInput'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);


export default function NewProjectForm() : JSX.Element {
  const classes = useStyles();
  const [seletedPlatform, setPlatform] = useState('아직 선택하지 않았습니다.');
  const [projectName, setProjectName] = useState('New Project');

  const prop = {seletedPlatform,setPlatform,projectName,setProjectName}
  return (
    <Grid container xs={12} spacing={3}>
      <Grid item xs={12}>
        <PlatformSelecter {...prop} />
      </Grid>
      <Grid item xs={12}>
        <ProjectNameInput {...prop} />
      </Grid>
    </Grid>
  );
}