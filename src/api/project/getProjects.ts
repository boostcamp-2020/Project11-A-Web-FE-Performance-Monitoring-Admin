import { authAxios } from '@utils/axios';
import { ProjectDocs } from '@state/type';

const getProjects = async (page?: number): Promise<ProjectDocs | undefined> => {
  const { data } = await authAxios.get<ProjectDocs>('/project', {
    params: { page },
  });

  if (data) {
    return data;
  }
  return undefined;
};

export default getProjects;
