import { authAxios } from '@utils/axios';

const editComment = async (
  commentId: string,
  comment: string,
): Promise<boolean> => {
  const { data: result } = await authAxios.patch(`/comment/${commentId}`, {
    comment,
  });
  if (result.status === 201) return true;
  return false;
};

export default editComment;
