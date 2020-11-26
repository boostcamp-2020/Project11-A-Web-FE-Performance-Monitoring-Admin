import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  errorPath: {
    color: 'gray',
  },
});

function createData(eventId: number,errorName: string, errorMessage: string, errorLocation: string, events: number, users: number) {
  const eventURL = `/issuedetail/${ String(eventId)}`;
  return { eventId , eventURL, errorName, errorMessage, errorLocation, events, users };
}

const rows = [
  createData(1,'TypeError', '장황한 에러메세지', '(../index/santry.ts)',20, 3),
  createData(3,'RangeError', '밥먹고 빵빵 배속이 빵빵', '(../index/bread.ts)',30, 1),
];

export default function IssueTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>ErrorName</TableCell>
            <TableCell align="center">EVENTS</TableCell>
            <TableCell align="center">USERS</TableCell>
            <TableCell align="center">ASSIGNEE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.eventId}>
              <TableCell>{row.eventId}</TableCell>
              <TableCell component="th" scope="row">
                <Typography>
                  <Link to={row.eventURL}>{row.errorName}</Link>
                  {row.errorLocation}
                </Typography>
                <Typography>{row.errorMessage}</Typography>
              </TableCell>
              <TableCell align="center">{row.events}</TableCell>
              <TableCell align="center">{row.users}</TableCell>
              <TableCell align="center">
                <AccountBoxIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}