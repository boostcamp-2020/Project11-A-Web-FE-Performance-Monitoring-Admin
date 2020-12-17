import React, { useState } from 'react';
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
      padding: '5px',
    },
    contentDescription: {
      margin: theme.spacing(1),
      padding: '5px',
    },
    contentBody: {
      marginLeft: '20px',
      marginBottom: '20px',
    },
  }),
);

interface prop {
  title: string;
  projectMembers: User[];
  context: string;
  setMembers: React.Dispatch<React.SetStateAction<User[]>>;
  handleSearchButtonClick: (searchQuery: any) => () => Promise<void>;
}

const ProjectMember = ({
  title,
  projectMembers,
  context,
  setMembers,
  handleSearchButtonClick,
}: prop): JSX.Element => {
  const classes = useStyles();
  const [searchQuery, setQuery] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleDeleteMemberClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setMembers(
      projectMembers.filter(
        (member) => event.currentTarget.value !== member._id,
      ),
    );
  };

  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.contentTitle}>{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.contentDescription}>{context}</Typography>
          </Grid>
          <Grid
            className={classes.contentBody}
            container
            item
            xs={12}
            spacing={0}
          >
            {projectMembers.map((member) => (
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
            <Divider variant="middle" />
            <br />
          </Grid>
          <Grid className={classes.contentBody} item xs={6}>
            <TextField
              error={searchQuery.length < MIN_SEARCH_TEXT_LENGTH}
              helperText={errorText}
              id="search-query"
              label="검색할 사용자 닉네임"
              defaultValue={searchQuery}
              onChange={({ target: { value } }) => {
                setQuery(value);
                setErrorText(
                  searchQuery.length < MIN_SEARCH_TEXT_LENGTH
                    ? '검색어가 너무 짧습니다.'
                    : '',
                );
              }}
            />
            <Button
              className={classes.inputSet}
              variant="contained"
              color="primary"
              disabled={searchQuery.length < MIN_SEARCH_TEXT_LENGTH}
              onClick={handleSearchButtonClick(searchQuery)}
            >
              찾기
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default ProjectMember;
