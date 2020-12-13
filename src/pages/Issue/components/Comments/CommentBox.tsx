import React, { FC, Dispatch, SetStateAction } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import styled from '@emotion/styled';
import convertDate from '@utils/convertDate';
import CommentMarkdownConvertedArea from './CommentMarkdownConvertedArea';

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #43374f;
  padding-right: 1%;
  padding-left: 1%;
`;

const NickButtonWrapper = styled.div`
  display: flex;
`;
const Nick = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const TimeStamp = styled.div`
  font-size: 0.9rem;
`;

const Buttons = styled.div`
  color: #757575;
  margin-left: 4%;
  width: 10%;
  font-size: 1.2rem;
  align-items: center;
  display: flex;
`;
const EditButton = styled.button`
  &:hover {
    color: #43374f;
    cursor: pointer;
  }
  border: 0;
  outline: 0;
  margin-right: 3%;
  background-color: white;
  color: inherit;
  padding-top: 0;
  padding-bottom: 0;
`;

const DeleteButton = styled.button`
  &:hover {
    color: red;
    cursor: pointer;
  }
  border: 0;
  outline: 0;
  margin-left: 3%;
  background-color: white;
  color: inherit;
  padding-top: 0;
  padding-bottom: 0;
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      margin: 10,
      paddingBottom: 5,
    },
  }),
);

interface Props {
  commentId: string;
  nick: string;
  timestamp: string;
  comment: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
const CommentBox: FC<Props> = ({
  commentId,
  nick,
  timestamp,
  comment,
  setIsEditing,
}: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={4}>
      <BoxHeader>
        <NickButtonWrapper>
          <Nick>{nick}</Nick>
          <Buttons>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>|
            <DeleteButton>Remove</DeleteButton>
          </Buttons>
        </NickButtonWrapper>
        <TimeStamp>{convertDate(timestamp)}</TimeStamp>
      </BoxHeader>
      <Paper className={classes.paper} elevation={2}>
        <CommentMarkdownConvertedArea text={comment} />
      </Paper>
    </Paper>
  );
};

export default CommentBox;
