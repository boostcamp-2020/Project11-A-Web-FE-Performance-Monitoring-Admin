import React, {
  ChangeEvent,
  FC,
  useState,
  SetStateAction,
  FormEvent,
} from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import { SearchEvent } from '@state/type';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginBottom: 20,
  },
  input: {
    width: '90%',
  },
}));

interface Props {
  searchQuery: Record<string, string>;
  setSearchQuery: React.Dispatch<SetStateAction<SearchEvent>>;
}

const SearchBar: FC<Props> = ({ searchQuery, setSearchQuery }: Props) => {
  const [KEY, VALUE] = [0, 1];
  const queryToInput = Object.entries(searchQuery).reduce(
    (acc, cur) => `${acc},${cur[KEY]}:${cur[VALUE]}`,
    '',
  );
  const [searchInput, setSearchInput] = useState<string>(queryToInput);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const queries = searchInput.split(',').map((query) => query.split(':'));
    const inputToQuery = queries.reduce(
      (acc, cur) => {
        const [key, value] = cur;
        acc[key] = value;
        return acc;
      },
      { page: 1, limit: 10 } as any,
    );
    setSearchQuery(inputToQuery);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const classes = useStyles();

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      className={classes.searchBar}
    >
      <IconButton>
        <Search />
      </IconButton>
      <InputBase
        placeholder="search event ex)level:error,environment:production"
        value={searchInput}
        onChange={handleChange}
        className={classes.input}
      />
    </Paper>
  );
};

export default SearchBar;
