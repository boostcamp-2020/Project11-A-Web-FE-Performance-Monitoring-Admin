import { authAxios } from '@utils/axios';
import { Comment, Docs } from '@store/type';

const getComments = async (
  page: number,
  issueId: string,
  limit: number,
): Promise<Docs<Comment> | undefined> => {
  const { data: commentDocs } = await authAxios.get<Docs<Comment>>(
    `/comment/${issueId}`,
    {
      params: { page, limit },
    },
  );

  if (commentDocs) return commentDocs;
  return undefined;
};

export default getComments;
