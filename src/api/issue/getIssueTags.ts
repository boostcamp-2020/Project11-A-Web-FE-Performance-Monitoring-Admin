import { authAxios } from '@utils/axios';
import { Event } from '@state/type';

const getIssueTags = async (eventId: string): Promise<any | undefined> => {
  const { data: tagsInfo } = await authAxios.get(`/tag/${eventId}`);
  if (tagsInfo) return tagsInfo;
  return undefined;
};

export default getIssueTags;
