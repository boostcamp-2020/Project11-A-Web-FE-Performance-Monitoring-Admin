import { authAxios } from '@utils/axios';
import { projecData } from '@state/type';

const create = async (data: projecData): Promise<void> => {
  const result = await authAxios.post('/project', {
    ...data,
  });
  if (result.status === 201) {
    window.location.href = '/project';
  }
};
export default create;
