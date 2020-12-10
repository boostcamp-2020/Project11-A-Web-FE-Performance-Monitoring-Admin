import { authAxios } from '@utils/axios';
import { Project, Docs } from '@store/type';

const getProjects = async (
  page?: number,
): Promise<Docs<Project> | undefined> => {
  const { data } = await authAxios.get<Docs<Project>>('/project', {
    params: { page },
  });

  if (data) {
    return data;
  }
  return undefined;
};

export default getProjects;
