import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FolderOpen, AllInbox, Settings } from '@material-ui/icons';
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
        <ListItem button>
          <ListItemIcon>
            <FolderOpen />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
      </Link>
      <Link to="/issue" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AllInbox />
          </ListItemIcon>
          <ListItemText primary="Issues" />
        </ListItem>
      </Link>
      <Link to="/setting" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>
      </Link>
    </div>
  );
}
