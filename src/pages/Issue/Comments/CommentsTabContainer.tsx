import React, { FC, useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import getComments from '@api/comment/getComments';
import { Comment } from '@store/type';
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
const DEFAULT_LIMIT = 5;

const CommentsTabContainer: FC<Props> = ({ issueId }: Props) => {
  const classes = useStyles();

  const [comments, setComments] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [maxPage, setMaxPage] = useState(1);

  const main = document.getElementsByTagName('main')[0];

  const infiniteScroll = async () => {
    const { scrollHeight, scrollTop, clientHeight } = main;
    if (scrollTop + clientHeight === scrollHeight) {
      if (currentPage === maxPage) return;
      const result = await getComments(currentPage + 1, issueId, DEFAULT_LIMIT);
      if (result) {
        setCurrentPage(currentPage + 1);
        setComments([...comments, ...result.docs]);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    };
  });

  useEffect(() => {
    (async () => {
      const result = await getComments(DEFAULT_PAGE, issueId, DEFAULT_LIMIT);
      if (result) {
        setComments(result.docs);
        result.totalPages && setMaxPage(result.totalPages);
      }
    })();
  }, []);

  return (
    <Paper className={classes.commentTab}>
      <Grid item xs={12}>
        <CommentHandleContainer
          issueId={issueId}
          isPost
          comments={comments}
          setComments={setComments}
        />
        {comments.map((comment: Comment) => {
          return (
            <CommentBoxContainer
              key={comment._id}
              issueId={issueId}
              nick={comment.userId.nickname}
              timestamp={comment.updatedAt}
              comment={comment.description}
              commentId={comment._id}
              setComments={setComments}
              comments={comments}
            />
          );
        })}
      </Grid>
    </Paper>
  );
};

export default CommentsTabContainer;
/* <CommentBox nick="hera" timestamp="2 days ago" comment="`hi?`" /> */
