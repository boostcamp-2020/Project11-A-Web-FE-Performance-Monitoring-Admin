import React, { FC, useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import getEventList from '@api/event/getEventList';
import { Event, SearchEvent } from '@state/type';
import EventsTab from './EventsTab';

interface Props {
  issueId: string;
}

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

const EventsTabContainer: FC<Props> = ({ issueId }: Props) => {
  const [searchQuery, setSearchQuery] = useState<SearchEvent>({
    page: DEFAULT_PAGE,
    limit: DEFAULT_LIMIT,
  });
  const [eventList, setEventList] = useState<Event[]>([]);

  useEffect(() => {
    (async () => {
      const searchedEventList = await getEventList(issueId, searchQuery);
      if (searchedEventList) setEventList(searchedEventList.docs);
    })();
  }, [searchQuery]);

  const { page, limit, ...rest } = searchQuery;

  return (
    <EventsTab
      searchQuery={rest as any}
      setSearchQuery={setSearchQuery}
      eventList={eventList}
    />
  );
};

export default EventsTabContainer;
