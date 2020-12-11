import { authAxios } from '@utils/axios';
import { Issue, Docs } from '@store/type';

const getIssues = async (
  page: number,
  projectId: string,
  limit: number,
): Promise<Docs<Issue> | undefined> => {
  const { data: issueDocs } = await authAxios.get<Docs<Issue>>(
    `/issue/list/${projectId}`,
    {
      params: { page, limit },
    },
  );

  if (issueDocs) return issueDocs;
  return undefined;
};

export default getIssues;
