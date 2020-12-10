import { baseAxios } from '@utils/axios';

const login = async (email: string, pwd: string): Promise<any> => {
  try {
    const result = await baseAxios.post('/auth/login', { email, pwd });
    if (result.status !== 200) alert(result.data.message);
    localStorage.setItem('token', result.data.token);
    return result.data;
  } catch (e) {
    console.error(e);
  }
};

export default login;
