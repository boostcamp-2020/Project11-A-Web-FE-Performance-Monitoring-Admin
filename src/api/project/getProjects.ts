import { authAxios } from '@utils/axios';
import { Project } from '@state/type';

interface Response {
  docs?: Project[];
}

const getProjects = async (page?: number): Promise<Project[] | undefined> => {
  const { data } = await authAxios.get<Response>('/project', {
    params: { page },
  });

  if (data.docs) {
    return data.docs;
  }
  return undefined;
};

export default getProjects;
