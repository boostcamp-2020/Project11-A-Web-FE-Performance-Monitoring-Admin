import React, { FC, useEffect, useState } from 'react';
import getEventList from '@api/event/getEventList';
import { Event, SearchEvent } from '@store/type';
import EventsTab from './components/EventsTab';

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
  const [totalPageNum, setTotalPageNum] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      const searchedEventList = await getEventList(issueId, searchQuery);
      if (searchedEventList) {
        setEventList(searchedEventList.docs);
        searchedEventList.totalPages &&
          setTotalPageNum(searchedEventList.totalPages);
      }
    })();
  }, [searchQuery]);

  const { page, limit, ...rest } = searchQuery;

  return (
    <EventsTab
      searchQuery={rest as any}
      setSearchQuery={setSearchQuery}
      eventList={eventList}
      totalPageNum={totalPageNum}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default EventsTabContainer;
