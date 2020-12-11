import { authAxios } from '@utils/axios';

const getIssueTags = async (eventId: string): Promise<any | undefined> => {
  const { data: tagsInfo } = await authAxios.get(`/tag/${eventId}`);
  if (tagsInfo) return tagsInfo;
  return undefined;
};

export default getIssueTags;
