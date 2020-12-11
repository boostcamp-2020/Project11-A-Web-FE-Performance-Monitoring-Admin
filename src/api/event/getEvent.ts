import { authAxios } from '@utils/axios';
import { Event } from '@store/type';

const getEvent = async (eventId: string): Promise<Event | undefined> => {
  const { data: event } = await authAxios.get(`/event/${eventId}`);
  if (event) return event;
  return undefined;
};

export default getEvent;
