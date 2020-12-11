import React, { useEffect, useState, FC } from 'react';
import { useLocation } from 'react-router-dom';
import getIssue from '@api/issue/getIssue';
import { Issue } from '@store/type';
import IssuePresenter from './IssuePresenter';

const IssueContainer: FC = () => {
  const location = useLocation();
  const issueId = location.pathname.split('/').slice(-1)[0];

  const [issue, setIssue] = useState<Issue>({} as Issue);

  useEffect(() => {
    (async () => {
      const currentIssue = await getIssue(issueId);
      if (currentIssue) setIssue(currentIssue);
    })();
  }, []);
  return <IssuePresenter issue={issue} />;
};

export default IssueContainer;
