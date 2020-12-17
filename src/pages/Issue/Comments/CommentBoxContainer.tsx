import React, { FC, useState } from 'react';
import deleteComment from '@api/comment/deleteComment';
import { Comment } from '@store/type';
import CommentHandleContainer from './CommentHandleContainer';
import CommentBox from './components/CommentBox';

interface Props {
  issueId: string;
  nick: string;
  timestamp: string;
  comment: string;
  commentId: string;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  comments: Comment[];
}

const CommentBoxContainer: FC<Props> = ({
  issueId,
  nick,
  timestamp,
  comment,
  commentId,
  setComments,
  comments,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    const result = await deleteComment(commentId);

    if (result) {
      setComments(
        comments.filter((curComment) => curComment._id !== commentId),
      );
    } else alert('댓글 삭제 실패!');
  };

  if (isEditing)
    return (
      <CommentHandleContainer
        issueId={issueId}
        commentId={commentId}
        isPost={!isEditing}
        setIsEditing={setIsEditing}
        comment={comment}
        comments={comments}
        setComments={setComments}
      />
    );
  return (
    <CommentBox
      commentId={commentId}
      nick={nick}
      timestamp={timestamp}
      comment={comment}
      setIsEditing={setIsEditing}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default CommentBoxContainer;
