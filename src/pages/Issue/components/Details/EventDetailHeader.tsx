import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  title: string;
}

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.dark,
    fontSize: 17,
  },
}));

const EventDetailHeader: FC<Props> = ({ title }: Props) => {
  const classes = useStyles();
  return <h2 className={classes.title}>{title}</h2>;
};

export default EventDetailHeader;
