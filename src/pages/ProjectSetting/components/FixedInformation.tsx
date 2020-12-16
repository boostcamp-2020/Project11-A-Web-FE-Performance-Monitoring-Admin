import React from 'react';
import { makeStyles,
  Typography,
  Grid,
  Paper,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
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
  alertLevel: string;
  handleLevelChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
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
            <tr>
              <th>알람 레벨</th>
              <td>
                <FormControl variant="outlined" >
                  <InputLabel id="demo-simple-select-outlined-label">오류 감지 레벨</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.alertLevel===''?'안 받음':props.alertLevel}
                    onChange={props.handleLevelChange}
                    label="ErrorLevel"
                  >
                    <MenuItem value={''}>안받음</MenuItem>
                    <MenuItem value={'fatal'}>fatal</MenuItem>
                    <MenuItem value={'critical'}>critical</MenuItem>
                    <MenuItem value={'error'}>error</MenuItem>
                    <MenuItem value={'warning'}>warning</MenuItem>
                  </Select>
                </FormControl>  
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </Grid>
  );

}
export default FixedInformation;