import React, { FC } from 'react';
import {
  Paper,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import { Issue } from '@state/type';
import convertDate from '@utils/convertDate';

interface Props {
  issue: Issue;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  tableHead: {
    fontWeight: 600,
    border: 'none',
  },
  tableBody: {
    border: 'none',
  },
}));

const ErrorName = styled.h1`
  margin: 0;
`;

const ErrorMessage = styled.span`
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;

const IssueHeader: FC<Props> = ({ issue }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justify="space-between">
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          {!Object.keys(issue).length ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              <ErrorName>{issue.eventName}</ErrorName>
              <ErrorMessage>{issue.errorMessage}</ErrorMessage>
              <div>First Created at: {convertDate(issue.createdAt)}</div>
              <div>
                Last Occured at:{' '}
                {issue.updatedAt
                  ? convertDate(issue.updatedAt)
                  : convertDate(issue.createdAt)}
              </div>
            </>
          )}
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tableHead}>
                  ISSUE #
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  EVENTS
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  ASSIGNEE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.tableBody}>
                  {issue._id}
                </TableCell>
                <TableCell align="center" className={classes.tableBody}>
                  {issue.events?.length}
                </TableCell>
                <TableCell align="center" className={classes.tableBody}>
                  <AccountBox />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default IssueHeader;
