import { baseAxios } from '@utils/axios';

const create = async (projectName: string, platform: string): Promise<void> => {
  const result = await baseAxios.post('/api/project', {
    platform,
    projectName,
  });
  if (result.status === 201) {
    window.location.href = '/project';
  }
};

export default create;
