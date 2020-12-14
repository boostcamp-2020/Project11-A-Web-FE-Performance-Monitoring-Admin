import React, { FC } from 'react';
import styled from '@emotion/styled';

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font: inherit;
  resize: vertical;
  padding: 1.5% 1.5%;
  min-height: 200px;
  outline: 0px;
  border: 0px;
  box-shadow: 0;
`;

interface Props {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  textAreaBlur: (arg0: any) => void;
}

const CommentTextArea: FC<Props> = ({ textAreaRef, textAreaBlur }: Props) => {
  return (
    <TextArea
      ref={textAreaRef}
      placeholder="Add details or updates to this event."
      onBlur={textAreaBlur}
    />
  );
};

export default CommentTextArea;
