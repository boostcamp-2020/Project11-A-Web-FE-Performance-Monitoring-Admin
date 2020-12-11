import React, { FC, Dispatch, SetStateAction } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { SearchResult } from '@state/type';
import TagBarChart from './TagBarChart';

const chartColors = ['#d35d6e', '#efb08c', '#f8d49d', '#5aa469'];
let chartColorIdx = 0;
const chartColorNum = chartColors.length;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    tagTab: {
      padding: 20,
      backgroundColor: theme.palette.primary.light,
    },
  }),
);

interface Props {
  searchResults: SearchResult[];
  setTagInfo: Dispatch<SetStateAction<SearchResult | undefined>>;
}

const IssueTags: FC<Props> = ({ searchResults, setTagInfo }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.tagTab}>
      <Grid container spacing={3}>
        {searchResults.map((searchResult: SearchResult) => {
          return (
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <TagBarChart
                  searchResult={searchResult}
                  setTagInfo={setTagInfo}
                  chartColor={chartColors[chartColorIdx++ % chartColorNum]}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default IssueTags;
