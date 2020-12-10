import { authAxios } from '@utils/axios';
import { ProjectData } from '@store/type';

const create = async (data: ProjectData): Promise<void> => {
  const result = await authAxios.post('/project', {
    ...data,
  });
  if (result.status === 201) {
    window.location.href = '/project';
  }
};
export default create;
