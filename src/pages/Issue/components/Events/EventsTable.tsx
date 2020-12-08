/* eslint-disable consistent-return */
import React, { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Event } from '@state/type';

interface Props {
  events: Event[];
}

const useStyles = makeStyles((theme) => ({
  tableHead: {
    fontWeight: 600,
  },
}));

const searchConditions = [
  'release',
  'environment',
  'sdk',
  'os',
  'browser',
  'url',
  'message',
  'version',
  'serverName',
  'transaction',
  'userIp',
  'level',
];

const EventsTable: FC<Props> = ({ events }: Props) => {
  const eventKeys = events.length ? Object.keys(events[0]) : undefined;
  const tableHeads = eventKeys?.filter((head) =>
    searchConditions.includes(head),
  );
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>ID</TableCell>
            {tableHeads &&
              tableHeads.map((head, idx) => (
                <TableCell align="left" key={idx} className={classes.tableHead}>
                  {head.toUpperCase()}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event._id}>
              <TableCell>{event._id}</TableCell>
              {Object.entries(event).map((entry, idx) => {
                const [key, value] = entry;
                if (!tableHeads?.includes(key)) return;
                return (
                  <TableCell align="left" key={idx}>
                    {typeof value === 'object'
                      ? Object.values(value).join()
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventsTable;
