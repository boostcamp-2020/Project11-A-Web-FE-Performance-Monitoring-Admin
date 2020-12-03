import { authAxios } from '@utils/axios';
import { user } from '@state/type';

const searchMember = async (searchQuery: string): Promise<user[]> => {
  const result = await authAxios.get(`/user/${searchQuery}`);
  if (result.status === 200) {
    return result.data.docs;
  }
  return [];
};
export default searchMember;
