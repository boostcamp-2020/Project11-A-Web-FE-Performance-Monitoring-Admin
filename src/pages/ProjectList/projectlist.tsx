/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import { Project } from '@state/type';

import SimpleCard from './components/simplecard';
import AppbarShift from '../layout/appbarshift';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  tooltipSpacer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fab: {
    margin: theme.spacing(2),
  },
}));

interface Props {
  projects: Project[];
}

const ProjectList: FunctionComponent<Props> = ({ projects }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={classes.tooltipSpacer}>
          <Tooltip title="Add" aria-label="add">
            <Fab color="primary" className={classes.fab} href="/newproject">
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            {projects.map((project, idx) => (
              <Grid item key={project._id} xs={3}>
                <SimpleCard projectId={idx} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default ProjectList;
