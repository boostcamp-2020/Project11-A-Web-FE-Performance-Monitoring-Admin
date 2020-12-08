import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
} from '@material-ui/core';
import { Menu, ChevronLeft, LockOpen } from '@material-ui/icons';
import SecondLogo from '@common/SecondLogo';
import MainListItems from './sidebar';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.primary.main,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'DM Serif Display',
    fontWeight: 700,
    fontSize: 35,
  },
  flexDisplay: {
    display: 'flex',
  },
  mainHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.light,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  fixedHeight: {
    height: 240,
  },
  sideBar: {
    backgroundColor: theme.palette.info.light,
  },
}));

export default function AppBarShift(): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const LogoutHandler = () => {
    localStorage.removeItem('nickname');
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <div>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <Menu />
          </IconButton>
          <div className={classes.mainHeader}>
            <div className={classes.flexDisplay}>
              <Link to="/project" style={{ textDecoration: 'none', color: "inherit" }}>
                <Typography
                  component="h1"
                  variant="h6"
                  noWrap
                  className={classes.title}
                >
                  Santry
                </Typography>
              </Link>
              <SecondLogo />
            </div>
            <IconButton color="inherit" onClick={LogoutHandler}>
              <LockOpen />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <List>
          <MainListItems />
        </List>
      </Drawer>
    </div>
  );
}
