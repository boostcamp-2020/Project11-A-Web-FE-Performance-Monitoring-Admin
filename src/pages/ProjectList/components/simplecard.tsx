import React, { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Project } from '@store/type';
import { setCurrentProject } from '@store/curProject/curProjectActions';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  root: {
    minWidth: 245,
    maxWidth: 245,
    minHeight: 230,
    maxHeight: 230,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      boxShadow: '1px 1px 20px #ddd',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});
interface Props {
  project: Project;
  projectNumber: number;
}
const SimpleCard: FC<Props> = ({
  project,
  projectNumber,
}: Props): JSX.Element => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = (projectId: string) => (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    dispatch(setCurrentProject(projectId));
  };

  return (
    <Link to="/issue" className={classes.link}>
      <Card className={classes.root} onClick={handleClick(project._id)}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            #{projectNumber} {project.platform}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            {project.projectName}
          </Typography>
          <Typography variant="body2" component="p">
            project created:{' '}
            {new Date(project.createdAt).toISOString().substring(0, 10)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">프로젝트 설정</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default SimpleCard;
