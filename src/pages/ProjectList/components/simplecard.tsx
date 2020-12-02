import React, { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Project } from '@state/type';
import { setCurrentProject } from '@state/curProject/curProjectActions';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  root: {
    minWidth: 260,
    maxWidth: 260,
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
    fontSize: 14,
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
          <Typography variant="h5" component="h1">
            {project.projectName}
          </Typography>
          <Typography variant="body2" component="p">
            project created:{' '}
            {new Date(project.createdAt).toISOString().substring(0, 10)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">프로젝트 보기</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default SimpleCard;
