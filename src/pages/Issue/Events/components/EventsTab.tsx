import React, { FC } from 'react';
import { Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { SearchEvent, Event } from '@store/type';
import SearchBar from './SearchBar';
import EventsTable from './EventsTable';

const useStyles = makeStyles((theme) => ({
  evetsTab: {
    padding: 20,
    backgroundColor: theme.palette.primary.light,
  },
  pagination: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
}));

interface Props {
  searchQuery: Record<string, string>;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchEvent>>;
  eventList: Event[];
  totalPageNum: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const EventsTab: FC<Props> = ({
  searchQuery,
  setSearchQuery,
  eventList,
  totalPageNum,
  currentPage,
  setCurrentPage,
}: Props) => {
  const classes = useStyles();

  const handlePaginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setSearchQuery({ ...searchQuery, page: value });
  };

  return (
    <Paper className={classes.evetsTab}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EventsTable events={eventList} />
      <Pagination
        count={totalPageNum}
        className={classes.pagination}
        onChange={handlePaginate}
        page={currentPage}
      />
    </Paper>
  );
};

export default EventsTab;
