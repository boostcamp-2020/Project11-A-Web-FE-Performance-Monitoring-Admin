import React, { useEffect, useState, FC } from 'react';
import getEvent from '@api/event/getEvent';
import { Event } from '@state/type';
import IssueDetail from './IssueDetail';

interface EventId {
  _id: string;
}

interface Props {
  events?: EventId[];
}

const IssueDetailContainer: FC<Props> = ({ events }: Props) => {
  const [eventIdx, setEventIdx] = useState<number>(0);
  const [event, setEvent] = useState<Event>({} as Event);

  useEffect(() => {
    (async () => {
      if (!events) return;
      const eventId = events[eventIdx]._id;
      if (!eventId) return;
      const currentEvent = await getEvent(eventId);
      if (currentEvent) setEvent(currentEvent);
    })();
  }, [events, eventIdx]);

  if (!events) return <div>이벤트가 없습니다</div>;

  return (
    <IssueDetail
      event={event}
      eventIdx={eventIdx}
      setEventIdx={setEventIdx}
      eventNum={events.length}
    />
  );
};

export default IssueDetailContainer;
