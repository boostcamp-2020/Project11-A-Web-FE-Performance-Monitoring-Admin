import { authAxios } from '@utils/axios';

const deleteProject = async (projectId: string) => {
  try {
    await authAxios.delete(`/project/${projectId}`);
  } catch (error) {
    return error.message;
  }
};

export default deleteProject;
