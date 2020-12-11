import React from 'react';
import { makeStyles,
  Typography,
  Grid,
  Paper,
  Divider,
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
  },
  contentTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: theme.spacing(1),
    padding: '5px',
  },
  contentBody: {
    padding: '10px',
  },
}));

interface prop {
  projectId: string;
  owner: string;
  platform: string;
  sdkToken: string;

}
const FixedInformation = (props: prop) : JSX.Element => {
  const classes = useStyles();
  return ( 
    <Grid item xs={12}>
      <Paper>
        <Typography className={classes.contentTitle}>
          프로젝트 정보
        </Typography>
        <Divider variant="middle" />
        <table className={classes.contentBody}>
          <tbody>
            <tr>
              <th>프로젝트 ID</th>
              <td>{props.projectId}</td>
            </tr>
            <tr>
              <th>프로젝트 생성자</th>
              <td>{props.owner}</td>
            </tr>
            <tr>
              <th>플랫폼</th>
              <td>{props.platform}</td>
            </tr>
            <tr>
              <th>DSN</th>
              <td>{props.sdkToken}</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </Grid>
  );

}
export default FixedInformation;