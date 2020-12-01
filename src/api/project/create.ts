import { authAxios } from '@utils/axios';

const create = async (projectName: string, platform: string): Promise<void> => {
  const result = await authAxios.post('/project', {
    platform,
    projectName,
  });
  if (result.status === 201) {
    window.location.href = '/project';
  }
};

export default create;
