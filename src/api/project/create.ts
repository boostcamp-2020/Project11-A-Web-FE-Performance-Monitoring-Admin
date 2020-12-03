import { authAxios } from '@utils/axios';

const create = async (data: projecData): Promise<void> => {
  const result = await authAxios.post('/project', {
    ...data,
  });
  if (result.status === 201) {
    window.location.href = '/project';
  }
};
interface projecData {
  platform: string;
  projectName: string;
  emails: string[];
  admins: string[];
  members: string[];
}
// type together

export default create;
