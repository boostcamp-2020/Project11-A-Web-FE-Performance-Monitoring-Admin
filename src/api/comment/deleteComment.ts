import { authAxios } from '@utils/axios';

const deleteComment = async (commentId: string): Promise<boolean> => {
  const { data: result } = await authAxios.delete(`/comment/${commentId}`);

  if (result.status === 200) return true;
  return false;
};

export default deleteComment;
