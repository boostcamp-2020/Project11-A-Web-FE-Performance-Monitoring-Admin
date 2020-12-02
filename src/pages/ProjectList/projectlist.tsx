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
import { Pagination } from '@material-ui/lab';

import { Project, Docs } from '@state/type';

import SimpleCard from './components/simplecard';
import AppbarShift from '../layout/appbarshift';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  section: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  tooltipSpacer: {
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
  pagenation: {
    display: 'flex',
    justifyContent: 'center',
    margin: 30,
  },
}));

interface Props {
  projects: Docs<Project>;
}

const ProjectList: FunctionComponent<Props> = ({ projects }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <section className={classes.section}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
              {projects.docs?.map((project, idx) => (
                <Grid item key={project._id} xs={3}>
                  <SimpleCard projectNumber={idx + 1} project={project} />
                </Grid>
              ))}
            </Grid>
          </Container>
          <div className={classes.tooltipSpacer}>
            <Tooltip title="Add" aria-label="add">
              <Fab color="secondary" className={classes.fab} href="/newproject">
                <AddIcon />
              </Fab>
            </Tooltip>
          </div>
        </section>
        <Pagination
          className={classes.pagenation}
          count={projects.totalPages}
          color="primary"
        />
      </main>
    </div>
  );
};

export default ProjectList;
