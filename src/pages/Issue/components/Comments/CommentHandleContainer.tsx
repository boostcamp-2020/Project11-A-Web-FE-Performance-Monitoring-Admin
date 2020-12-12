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
import addComment from '@api/comment/addComment';
import editComment from '@api/comment/editComment';
import { Comment } from '@state/type';
import CommentTextArea from './CommentTextArea';
import CommentMarkdownConvertedArea from './CommentMarkdownConvertedArea';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      margin: 10,
      paddingBottom: 5,
    },

    tab: {
      minWidth: 80, // a number of your choice
      width: 80, // a number of your choice
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
  changeRenderFlip: any;
  commentId?: string;
  setIsEditing?: Dispatch<SetStateAction<boolean>>;
}

interface PanelProps {
  children: JSX.Element;
  value: number;
  index: number;
}

const TabPanel: FC<PanelProps> = ({ children, value, index }: PanelProps) => {
  return <Paper>{value === index && children}</Paper>;
};

const CommentHandleContainer: FC<Props> = ({
  issueId,
  isPost,
  changeRenderFlip,
  commentId,
  setIsEditing,
}: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [text, setText] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const textAreaBlur = (event: any): void => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleAddClick = async () => {
    const result = await addComment(issueId, text);
    setText('');
    changeRenderFlip();
    /* if (result) changeRenderFlip();
    else alert('댓글 등록 실패!'); */
  };

  const handleEditClick = async () => {
    const result = await editComment(commentId as string, text);
    if (setIsEditing) {
      setIsEditing(false);
    }
    changeRenderFlip();
    /* if (result) changeRenderFlip();
    else alert('댓글 수정 실패!'); */
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.value = text;
    }
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
              onClick={() => setIsEditing(false)}
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
