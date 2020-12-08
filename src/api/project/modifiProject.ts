import { authAxios } from '@utils/axios';

const modifiProject = async (
  projectId: string,
  projectName: string,
  admins: string[],
  members: string[],
): Promise<void> => {
  const result = await authAxios.put(`/project/${projectId}`, {
    projectName,
    admins,
    members,
  });
  if (result.status === 200) {
    window.location.href = '/project';
  }
  alert(result.data.message);
};
export default modifiProject;
