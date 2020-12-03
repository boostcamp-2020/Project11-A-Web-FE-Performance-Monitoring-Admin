import { authAxios } from '@utils/axios';

const searchMember = async (searchQuery: string): Promise<user[]> => {
  const result = await authAxios.get(`/user/${searchQuery}`);
  if (result.status === 200) {
    return result.data.docs;
  }
  return [];
};

interface user {
  _id: string;
  nickname: string;
  email: string;
}
// projectMember.tsx interface 와 합쳐야함
export default searchMember;
