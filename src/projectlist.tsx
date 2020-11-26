
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import SimpleCard from './simplecard';
import AppbarShift from './appbarshift';


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
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Project():JSX.Element {
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
            {cards.map((card) => (
              <Grid item key={card} xs={3}>
                <SimpleCard />
              </Grid>
          ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}