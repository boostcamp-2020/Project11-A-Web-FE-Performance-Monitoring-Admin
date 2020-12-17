import { authAxios } from '@utils/axios';
import { User } from '@store/type';

const modifiProject = async (
  projectId: string,
  projectName: string,
  admins: User[],
  members: User[],
  alertLevel: string,
): Promise<void> => {
  const result = await authAxios.put(`/project/${projectId}`, {
    projectName,
    admins,
    members,
    alertLevel,
  });
  if (result.status === 200) {
    window.location.href = '/project';
  }
};
export default modifiProject;
