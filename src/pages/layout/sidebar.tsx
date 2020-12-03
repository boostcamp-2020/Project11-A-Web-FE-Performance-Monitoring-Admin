import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

export default function mainListItems(): JSX.Element {
  const classes = useStyles();
  return (
    <div>
      <Link to="/project" className={classes.link}>
        <ListItem button component="a" href="/project">
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
      </Link>
      <Link to="/issue" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AllInboxIcon />
          </ListItemIcon>
          <ListItemText primary="Issues" />
        </ListItem>
      </Link>
      <Link to="/setting" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>
      </Link>
    </div>
  );
}
