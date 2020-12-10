import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorContext } from '@/state/type';

interface Props {
  contexts: ErrorContext;
  lineno: number;
}


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
    fontSize: 12,
  },
  displayInherit: {
    display: 'inherit',
    marginLeft: 20,
  },
}));

const StackContext: FC<Props> = ({ contexts, lineno }: Props) => {
  const classes = useStyles();
  const totalContext:string[] = [];
  totalContext.concat(contexts.preErrorContext);
  totalContext.concat(contexts.errorContext);
  totalContext.concat(contexts.postErrorContext);

  return (
    <ol start={lineno - contexts.preErrorContext.length} className={classes.orderedList}>
      {totalContext.map((context, idx) => (
        <li
          key={idx}
          className={`${classes.listItem} ${
            idx === contexts.preErrorContext.length+1 ? classes.activate : undefined
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
