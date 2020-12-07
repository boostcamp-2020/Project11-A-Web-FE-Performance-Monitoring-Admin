import React, { FC, Dispatch } from 'react';
import { Event } from '@state/type';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SummarizedTags from './SummarizedTags';
import EventHeader from './EventHeader';

interface Props {
  event: Event;
  eventIdx: number;
  setEventIdx: Dispatch<React.SetStateAction<number>>;
  eventNum: number;
}

const useStyles = makeStyles({
  paper: {
    padding: '1rem 2rem',
  },
});

const IssueDetail: FC<Props> = ({
  event,
  eventIdx,
  setEventIdx,
  eventNum,
}: Props) => {
  const classes = useStyles();
  const {
    environment,
    release,
    transaction,
    userIp,
    level,
    serverName,
  } = event;

  const eventTags = {
    environment,
    release,
    transaction,
    userIp,
    level,
    serverName,
  };

  const hasTags = Object.values(eventTags).reduce(
    (prev, cur) => prev || cur !== undefined,
    false,
  );

  return (
    <Paper className={classes.paper}>
      <EventHeader
        eventId={event._id}
        occuredAt={event.timeStamp}
        eventIdx={eventIdx}
        setEventIdx={setEventIdx}
        eventNum={eventNum}
      />
      {hasTags && <SummarizedTags tags={eventTags} />}
    </Paper>
  );
};

export default IssueDetail;