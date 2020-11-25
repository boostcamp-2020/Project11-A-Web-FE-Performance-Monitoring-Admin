import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import SettingsIcon from '@material-ui/icons/Settings';

export default function mainListItems ():JSX.Element{
  return (
    <div>
      <ListItem button component="a" href="/project">
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AllInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Issues" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItem>
    </div>
  )
}