import { authAxios } from '@utils/axios';
import { Issue } from '@state/type';

const getIssue = async (issueId: string): Promise<Issue | undefined> => {
  const { data: issue } = await authAxios(`/issue/${issueId}`);
  if (issue) return issue;
  return undefined;
};

export default getIssue;
