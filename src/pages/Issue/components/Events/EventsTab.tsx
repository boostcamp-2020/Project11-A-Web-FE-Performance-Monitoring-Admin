import React, { FC } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SearchEvent, Event } from '@state/type';
import SearchBar from './SearchBar';
import EventsTable from './EventsTable';

const useStyles = makeStyles((theme) => ({
  evetsTab: {
    padding: 20,
    backgroundColor: theme.palette.primary.light,
  },
}));

interface Props {
  searchQuery: Record<string, string>;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchEvent>>;
  eventList: Event[];
}

const EventsTab: FC<Props> = ({
  searchQuery,
  setSearchQuery,
  eventList,
}: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.evetsTab}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EventsTable events={eventList} />
    </Paper>
  );
};

export default EventsTab;
