import { authAxios } from '@utils/axios';
import { SearchEvent, Event, Docs } from '@store/type';

const getEventList = async (
  issueId: string,
  query: SearchEvent,
): Promise<Docs<Event> | undefined> => {
  const { data: eventList } = await authAxios.get(`/event/list/${issueId}`, {
    params: query,
  });
  if (eventList) return eventList;
  return undefined;
};

export default getEventList;
