import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275,
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
interface myprop {
  projectId:number
}
export default function SimpleCard(mprop:myprop) :JSX.Element {
  const classes = useStyles();
  const projectNumber = mprop.projectId;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          #
          {projectNumber} 
          프로젝트 
        </Typography>
        <Typography variant="h5" component="h2">
          프로젝트 타입
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          설명입니다.
        </Typography>
        <Typography variant="body2" component="p">
          피자먹고 싶다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">프로젝트 보기</Button>
      </CardActions>
    </Card>
  );
}