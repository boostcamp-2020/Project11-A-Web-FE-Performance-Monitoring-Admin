import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@material-ui/core';
import { AccountBox, AccessTime } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Docs, Issue } from '@store/type';
import timeDiff from '@utils/timeDiff';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  errorPath: {
    color: 'gray',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 700,
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
            <TableCell align="center">#</TableCell>
            <TableCell>ErrorName</TableCell>
            <TableCell align="center">EVENTS</TableCell>
            <TableCell align="center">ASSIGNEE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issues.docs?.map((issue, idx) => (
            <TableRow key={issue._id}>
              <TableCell align="center">{idx}</TableCell>
              <TableCell component="th" scope="row">
                <Typography>
                  <Link
                    to={`/issuedetail/${issue._id}`}
                    className={classes.link}
                  >
                    {issue.eventName}
                  </Link>
                </Typography>

                <Typography>{issue.errorMessage}</Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  style={{ display: 'flex' }}
                >
                  <AccessTime style={{ fontSize: '1rem', marginRight: 5 }} />{' '}
                  {timeDiff(new Date(), new Date(issue.updatedAt))}
                </Typography>
              </TableCell>
              <TableCell align="center">{issue.events?.length}</TableCell>
              <TableCell align="center">
                <AccountBox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IssueTable;
