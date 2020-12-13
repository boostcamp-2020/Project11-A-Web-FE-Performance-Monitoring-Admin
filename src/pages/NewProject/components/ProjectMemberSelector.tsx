import React, { useState, FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Grid,
  TextField,
  Paper,
  Divider,
} from '@material-ui/core';
import { User } from '@store/type';

const MIN_SEARCH_TEXT_LENGTH = 3;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    inputSet: {
      height: '45px',
      marginLeft: '5px',
    },
    contentTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      margin: theme.spacing(1),
    },
    paper: {
      padding: '2%',
    },
  }),
);

interface Props {
  title: string;
  context: string;
  selectedUsers: User[];
  searchResult: User[];
  handleSearchButtonClick: (searchQuery: any) => Promise<void>;
  handleDeleteMemberClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleAddMemberClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const ProjectMemberSelector: FC<Props> = ({
  title,
  context,
  selectedUsers,
  searchResult,
  handleSearchButtonClick,
  handleDeleteMemberClick,
  handleAddMemberClick,
}: Props): JSX.Element => {
  const classes = useStyles();
  const [searchQuery, setQuery] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleQueryChange = ({ target }: any) => {
    const { value } = target;
    setQuery(value);
    setErrorText(
      searchQuery.length < MIN_SEARCH_TEXT_LENGTH
        ? '검색어가 너무 짧습니다.'
        : '',
    );
  };

  return (
    <Grid item xs>
      <Paper className={classes.paper}>
        <Typography className={classes.contentTitle}>{title}</Typography>
        <Divider variant="middle" />
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>{context}</Typography>
            </Grid>
            <Grid container item xs={12} spacing={0}>
              {selectedUsers.map((member) => (
                <Grid key={member._id} item xs={2}>
                  <Button
                    variant="outlined"
                    value={member._id}
                    onClick={handleDeleteMemberClick}
                  >
                    <span>{member.nickname}</span>
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <br />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={searchQuery.length < MIN_SEARCH_TEXT_LENGTH}
                helperText={errorText}
                id="search-query"
                label="검색할 사용자 닉네임"
                defaultValue={searchQuery}
                onChange={handleQueryChange}
              />
              <Button
                className={classes.inputSet}
                variant="contained"
                color="primary"
                disabled={searchQuery.length < MIN_SEARCH_TEXT_LENGTH}
                onClick={() => handleSearchButtonClick(searchQuery)}
              >
                찾기
              </Button>
            </Grid>
            <Grid container item xs={12} spacing={0}>
              {searchResult.map((member) => (
                <Grid key={member._id} item xs={2}>
                  <Button
                    variant="outlined"
                    value={member._id}
                    onClick={handleAddMemberClick}
                  >
                    <span>{member.nickname}</span>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};
export default ProjectMemberSelector;
