import React, { FC } from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const MarkdownConverted = styled.div`
  box-sizing: border-box;
  margin: 0px;
  overflow: auto;
  padding: 0px 1.5%;
  min-height: 200px;
  outline: 0px;
  border: 0px;
  text-align: left;
`;

const InlineCodeBlock = (props: any) => {
  return (
    <span
      style={{ background: `#f7f8f9`, color: `#4a4550`, padding: `6px 5px` }}
    >
      {props.value}
    </span>
  );
};

const CodeBlock = (props: any) => {
  return (
    <pre style={{ background: '#f7f8f9', color: '#4a4550', padding: 10 }}>
      <code>{props.value}</code>
    </pre>
  );
};

interface Props {
  text: string;
}

const CommentMarkdownConvertedArea: FC<Props> = ({ text }: Props) => {
  return (
    <MarkdownConverted>
      <ReactMarkdown
        source={text}
        renderers={{ inlineCode: InlineCodeBlock, code: CodeBlock }}
      />
    </MarkdownConverted>
  );
};

export default CommentMarkdownConvertedArea;
