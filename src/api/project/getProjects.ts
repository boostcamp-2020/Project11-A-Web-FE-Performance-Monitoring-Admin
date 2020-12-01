import { authAxios } from '@utils/axios';
import { Project } from '@state/type';

interface Response {
  docs?: Project[];
}

const getProjects = async (): Promise<Project[] | undefined> => {
  const { data } = await authAxios.get<Response>('/project', {
    params: { page: 1 },
  });

  if (data.docs) {
    return data.docs;
  }
};

export default getProjects;
