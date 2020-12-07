import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { Docs, Issue } from '@state/type';
import AppbarShift from '../layout/appbarshift';

interface Props {
  project: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const ProjectSetting = ({ project }: Props): JSX.Element => {
  const classes = useStyles();
  const [projectName, setProjectName] = useState(project.projectName);
  const [alertEmails, setAlertEmails] = useState(project.emails);
  const [members, setMembers] = useState(project.members);
  const [admins, setAdmins] = useState(project.admins);
  const projectId = project._id;
  const owner = project.owner.nickname;
  const platform = project.platform;
  const sdkToken = project.sdkToken;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default ProjectSetting;
