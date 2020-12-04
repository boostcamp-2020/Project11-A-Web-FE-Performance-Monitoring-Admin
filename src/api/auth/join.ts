import { baseAxios } from '@utils/axios';

const join = async (email: string, pwd: string) => {
  const result = await baseAxios.post('/auth/join', { email, pwd });
  if (result.status === 201) {
    window.location.href = '/';
  }
};

export default join;
