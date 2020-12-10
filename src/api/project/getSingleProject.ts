import { authAxios } from '@utils/axios';

const getSingleProject = async (projectId: string): Promise<any> => {
  const result = await authAxios.get(`/project/${projectId}`);
  if (result.status === 200) {
    return result.data;
  }
  return result.data.message;
};
export default getSingleProject;
