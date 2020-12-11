import { authAxios } from '@utils/axios';
import { ProjectData } from '@store/type';

const create = async (data: ProjectData): Promise<string> => {
  const result = await authAxios.post('/project', {
    ...data,
  });
  if (result.status === 201) {
    return result.data.token;
  }
  return result.data.message;
};
export default create;
