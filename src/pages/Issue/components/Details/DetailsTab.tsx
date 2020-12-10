import React, { FC, Dispatch } from 'react';
import { Event, Tags } from '@store/type';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SummarizedTags from './Tags/SummarizedTags';
import EventHeader from './EventHeader';
import ErrorStack from './ErrorStack/ErrorStack';
import Info from './Info/Info';

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

const DetailsTab: FC<Props> = ({
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
    url,
    version,
    sdk,
    browser,
    os,
  } = event;

  const eventTags: Tags = {
    environment,
    release,
    transaction,
    userIp,
    level,
    serverName,
    url,
    version,
  };
  eventTags.sdk = sdk && Object.values(sdk).join(' ');
  eventTags.browser = browser && Object.values(browser).join(' ');
  eventTags.os = os && Object.values(os).join(' ');

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
      {event.stacktrace && event.errorContexts && !event.message && (
        <ErrorStack
          stacktrace={event.stacktrace}
          errorContexts={event.errorContexts}
        />
      )}
      {event.contexts &&
        Object.entries(event.contexts).map((context) => (
          <Info key={event._id} title={context[0]} datas={context[1]} />
        ))}
    </Paper>
  );
};

export default DetailsTab;
