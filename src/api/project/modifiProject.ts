import { authAxios } from '@utils/axios';
import { User } from '@/state/type';

const modifiProject = async (
  projectId: string,
  projectName: string,
  admins: User[],
  members: User[],
): Promise<void> => {
  const result = await authAxios.put(`/project/${projectId}`, {
    projectName,
    admins,
    members,
  });
  if (result.status === 200) {
    window.location.href = '/project';
  }
};
export default modifiProject;
