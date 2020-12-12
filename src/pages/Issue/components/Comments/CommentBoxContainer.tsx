import React, { FC, useState, useEffect } from 'react';
import CommentHandleContainer from './CommentHandleContainer';
import CommentBox from './CommentBox';

interface Props {
  issueId: string;
  nick: string;
  timestamp: string;
  comment: string;
  commentId: string;
  changeRenderFlip: any;
}

const CommentBoxContainer: FC<Props> = ({
  issueId,
  nick,
  timestamp,
  comment,
  commentId,
  changeRenderFlip,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  if (isEditing)
    return (
      <CommentHandleContainer
        issueId={issueId}
        commentId={commentId}
        isPost={!isEditing}
        setIsEditing={setIsEditing}
        changeRenderFlip={changeRenderFlip}
      />
    );
  return (
    <CommentBox
      commentId={commentId}
      nick={nick}
      timestamp={timestamp}
      comment={comment}
      setIsEditing={setIsEditing}
    />
  );
};

export default CommentBoxContainer;
