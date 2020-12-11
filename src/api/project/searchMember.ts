import { authAxios } from '@utils/axios';
import { User } from '@store/type';

const searchMember = async (searchQuery: string): Promise<User[]> => {
  const result = await authAxios.get(`/user/${searchQuery}`);
  if (result.status === 200) {
    return result.data.docs;
  }
  return [];
};
export default searchMember;
