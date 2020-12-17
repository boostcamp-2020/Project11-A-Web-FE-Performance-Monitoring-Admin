import { authAxios } from '@utils/axios';

interface Response {
  _id: string;
}

const addComment = async (
  issueId: string,
  comment: string,
): Promise<Response | boolean> => {
  const result = await authAxios.post(`/comment`, {
    issueId,
    comment,
  });
  if (result.status === 201) return result.data;
  return false;
};

export default addComment;
