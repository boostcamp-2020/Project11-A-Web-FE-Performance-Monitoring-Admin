import { authAxios } from '@utils/axios';
import { Comment } from '@store/type';

const addComment = async (
  issueId: string,
  comment: string,
): Promise<Comment | boolean> => {
  const result = await authAxios.post(`/comment`, {
    issueId,
    comment,
  });
  if (result.status === 201) return result.data;
  return false;
};

export default addComment;
