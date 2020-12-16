import React, {
  FC,
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, Button } from '@material-ui/core';
import styled from '@emotion/styled';
import { Comment } from '@store/type';
import addComment from '@api/comment/addComment';
import editComment from '@api/comment/editComment';
import { useSelector, DefaultRootState } from 'react-redux';
import CommentTextArea from './components/CommentTextArea';
import CommentMarkdownConvertedArea from './components/CommentMarkdownConvertedArea';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      margin: 10,
      paddingBottom: 5,
    },

    tab: {
      minWidth: 80,
      width: 80,
    },
  }),
);

const BubbleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  align-items: center;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
`;

interface Props {
  issueId: string;
  isPost: boolean;
  comments: Comment[];
  setComments: Dispatch<SetStateAction<Comment[]>>;
  commentId?: string;
  setIsEditing?: Dispatch<SetStateAction<boolean>>;
  comment?: string;
}

interface PanelProps {
  children: JSX.Element;
  value: number;
  index: number;
}

const TabPanel: FC<PanelProps> = ({ children, value, index }: PanelProps) => {
  return <Paper>{value === index && children}</Paper>;
};

interface State extends DefaultRootState {
  userReducer: {
    email: string;
    nickname: string;
    id: string;
  };
}

const CommentHandleContainer: FC<Props> = ({
  issueId,
  isPost,
  comments,
  setComments,
  commentId,
  setIsEditing,
  comment,
}: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const user = useSelector((state: State) => state.userReducer);

  const [text, setText] = useState<string>(comment || '');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const textAreaBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setText(event.target.value);
  };

  const makeNewComment = (id: string, issueId: string, description: string) => {
    return {
      _id: id,
      userId: {
        _id: user.id,
        email: user.email,
        nickname: user.nickname,
      },
      issueId,
      description,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    };
  };

  const handleAddClick = async () => {
    const result = await addComment(issueId, text);
    setText('');

    if (typeof result !== 'boolean') {
      setComments([makeNewComment(result._id, issueId, text), ...comments]);
      setText('');
    } else alert('댓글 등록 실패!');
  };

  const handleEditClick = async () => {
    const result = await editComment(commentId as string, text);
    if (setIsEditing) {
      setIsEditing(false);
    }

    if (result) {
      setComments(
        comments.map((comment) =>
          commentId === comment._id
            ? {
                ...comment,
                description: text,
                updatedAt: new Date().toString(),
              }
            : comment,
        ),
      );
    } else alert('댓글 수정 실패!');
  };

  useEffect(() => {
    if (textAreaRef.current) textAreaRef.current.value = text;
  });

  return (
    <Paper className={classes.paper} elevation={4}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
      >
        <Tab
          classes={{ root: classes.tab }}
          label={isPost ? 'Write' : 'Edit'}
        />
        <Tab classes={{ root: classes.tab }} label="Preview" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CommentTextArea
          textAreaRef={textAreaRef}
          textAreaBlur={textAreaBlur}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CommentMarkdownConvertedArea text={text} />
      </TabPanel>
      <BubbleBottom>
        Markdown Supported
        <Buttons>
          {!isPost && setIsEditing && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              cancle
            </Button>
          )}
          {isPost ? (
            <Button variant="outlined" onClick={handleAddClick}>
              Post Comment
            </Button>
          ) : (
            <Button variant="outlined" onClick={handleEditClick}>
              Save Comment
            </Button>
          )}
        </Buttons>
      </BubbleBottom>
    </Paper>
  );
};

export default CommentHandleContainer;
