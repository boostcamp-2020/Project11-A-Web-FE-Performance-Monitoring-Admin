import { baseAxios } from '@utils/axios';

const githubCallback = async (props: any) => {
  const result = await baseAxios.get(`/auth/github/callback`, {
    params: { code: props.code },
  });
  return result.data;
};

export default githubCallback;
