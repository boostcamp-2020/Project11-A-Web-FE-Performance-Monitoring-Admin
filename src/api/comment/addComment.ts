import { authAxios } from '@utils/axios';

const addComment = async (
  issueId: string,
  comment: string,
): Promise<boolean> => {
  const { data: result } = await authAxios.post(`/comment`, {
    issueId,
    comment,
  });
  if (result.status === 201) return true;
  return false;
};

export default addComment;
