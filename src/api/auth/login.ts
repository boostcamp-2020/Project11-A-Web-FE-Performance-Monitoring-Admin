import { baseAxios } from '@utils/axios';

const login = async (email: string, pwd: string): Promise<any> => {
  const { data: user } = await baseAxios.post('/auth/login', { email, pwd });
  return user;
};

export default login;
