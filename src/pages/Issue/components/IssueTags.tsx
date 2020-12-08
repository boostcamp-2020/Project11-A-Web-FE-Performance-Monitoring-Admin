import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TagChart from './TagChart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface SearchResult {
  title: string;
  contents: { tag: string; count: number }[];
}

interface Props {
  searchResults: SearchResult[];
}

const IssueTags: FC<Props> = ({ searchResults }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {searchResults.map((searchResult: SearchResult) => {
          return (
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <TagChart searchResult={searchResult} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default IssueTags;
