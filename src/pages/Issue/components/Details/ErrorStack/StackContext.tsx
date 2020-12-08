import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  contexts: string[];
  lineno: number;
}

const MIDDLE = 2;

const useStyles = makeStyles((theme) => ({
  activate: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.light,
  },
  orderedList: {
    listStylePosition: 'inside',
    padding: '0 20px',
  },
  listItem: {
    padding: 5,
  },
  displayInherit: {
    display: 'inherit',
    marginLeft: 20,
  },
}));

const StackContext: FC<Props> = ({ contexts, lineno }: Props) => {
  const classes = useStyles();
  return (
    <ol start={lineno - MIDDLE} className={classes.orderedList}>
      {contexts.map((context, idx) => (
        <li
          key={idx}
          className={`${classes.listItem} ${
            idx === MIDDLE ? classes.activate : undefined
          }`}
        >
          <code>
            <pre className={classes.displayInherit}>{context}</pre>
          </code>
        </li>
      ))}
    </ol>
  );
};
export default StackContext;
