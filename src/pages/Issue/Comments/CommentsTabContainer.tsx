import React, { FC, useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import getComments from '@api/comment/getComments';
import { Docs, Comment } from '@state/type';
import CommentHandleContainer from './CommentHandleContainer';
import CommentBoxContainer from './CommentBoxContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      margin: 10,
      paddingBottom: 5,
    },
    commentTab: {
      padding: 18,
      backgroundColor: theme.palette.primary.light,
    },
  }),
);

interface Props {
  issueId: string;
}

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 100;

const CommentsTabContainer: FC<Props> = ({ issueId }: Props) => {
  const classes = useStyles();

  const [comments, setComments] = useState<Comment[]>([]);
  const [renderFlip, setRenderFlip] = useState<boolean>(false);

  const changeRenderFlip = () => {
    setRenderFlip(!renderFlip);
  };

  useEffect(() => {
    (async () => {
      const result = await getComments(DEFAULT_PAGE, issueId, DEFAULT_LIMIT);
      if (result) {
        setComments(result.docs);
      }
    })();
  }, [renderFlip]);

  return (
    <Paper className={classes.commentTab}>
      <Grid item xs={12}>
        <CommentHandleContainer
          issueId={issueId}
          isPost
          changeRenderFlip={changeRenderFlip}
        />
        {comments.map((comment: Comment) => {
          return (
            <CommentBoxContainer
              issueId={issueId}
              nick={comment.userId.nickname}
              timestamp={comment.updatedAt}
              comment={comment.description}
              commentId={comment._id}
              changeRenderFlip={changeRenderFlip}
            />
          );
        })}
      </Grid>
    </Paper>
  );
};

export default CommentsTabContainer;
/* <CommentBox nick="hera" timestamp="2 days ago" comment="`hi?`" /> */
