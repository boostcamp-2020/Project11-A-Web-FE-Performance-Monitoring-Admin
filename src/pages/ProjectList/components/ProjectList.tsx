/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container, Tooltip, Fab } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Add } from '@material-ui/icons';

import { Project, Docs } from '@store/type';

import SimpleCard from './components/SimpleCard';
import AppbarShift from '../layout/AppbarShift';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 32px',
  },
  title: {
    fontSize: 28,
    display: 'flex',
    alignItems: 'center',
    width: 140,
    justifyContent: 'space-between',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
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
    paddingBottom: theme.spacing(4),
    marginLeft: 0,
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
  handleClickProject: (projectId: string) => (event: any) => void;
}

const ProjectList: FunctionComponent<Props> = ({
  projects,
  handleClickProject,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <section className={classes.section}>
          <header className={classes.header}>
            <h2 className={classes.title}>Projects</h2>
            <div className={classes.tooltipSpacer}>
              <Tooltip title="Add" aria-label="add">
                <Fab
                  color="secondary"
                  className={classes.fab}
                  component={Link}
                  to="/newproject"
                >
                  <Add />
                </Fab>
              </Tooltip>
            </div>
          </header>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
              {projects.docs?.map((project, idx) => (
                <Grid item key={project._id} xs={3}>
                  <SimpleCard
                    projectNumber={idx + 1}
                    project={project}
                    handleClickProject={handleClickProject}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
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
