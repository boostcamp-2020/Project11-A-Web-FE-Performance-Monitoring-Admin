import React, { FunctionComponent } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Project } from '@state/type';

const useStyles = makeStyles({
  root: {
    minWidth: 260,
    maxWidth: 260,
    minHeight: 230,
    maxHeight: 230,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
const SimpleCard: FunctionComponent<Props> = ({
  project,
  projectNumber,
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
  );
};

export default SimpleCard;
