import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Issue } from '@store/type';
import DetailsTabContainer from './Details/DetailsTabContainer';
import EventsTabContainer from './Events/EventsTabContainer';
import IssueTagsContainer from './IssueTagsContainer';

const useStyles = makeStyles({
  root: {
    marginTop: '0.5rem',
    flexGrow: 1,
  },
});

interface Props {
  issue: Issue;
}

interface PanelProps {
  children: JSX.Element;
  value: number;
  index: number;
}

const TabPanel: FC<PanelProps> = ({ children, value, index }: PanelProps) => {
  return <Paper>{value === index && children}</Paper>;
};

const IssueTabs: FC<Props> = ({ issue }: Props): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Details" component={Link} to="details" />
        <Tab label="Tags" component={Link} to="tags" />
        <Tab label="Events" />
        <Tab label="Comments" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DetailsTabContainer events={issue.events} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IssueTagsContainer issue={issue} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EventsTabContainer issueId={issue._id} />
      </TabPanel>
    </Paper>
  );
};

export default IssueTabs;
