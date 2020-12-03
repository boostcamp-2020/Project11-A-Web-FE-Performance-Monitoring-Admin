import React, { FC } from 'react';
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
import { Docs, Issue } from '@state/type';
import convertDate from '@utils/convertDate';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  errorPath: {
    color: 'gray',
  },
});

interface Props {
  issues: Docs<Issue>;
}

const IssueTable: FC<Props> = ({ issues }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>ErrorName</TableCell>
            <TableCell align="center">EVENTS</TableCell>
            <TableCell align="center">ASSIGNEE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issues.docs?.map((issue, idx) => (
            <TableRow key={issue._id}>
              <TableCell>{idx}</TableCell>
              <TableCell component="th" scope="row">
                <Typography>
                  <Link to={`/issuedetail/${issue._id}`}>
                    {issue.errorName}
                  </Link>
                </Typography>
                <Typography>
                  {issue.errorMessage} {convertDate(issue.createdAt)}
                </Typography>
              </TableCell>
              <TableCell align="center">{issue.events?.length}</TableCell>
              <TableCell align="center">
                <AccountBoxIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IssueTable;
