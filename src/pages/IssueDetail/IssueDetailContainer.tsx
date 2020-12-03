import React, { useEffect, useState, FC } from 'react';
import { useLocation } from 'react-router-dom';
import getIssue from '@api/issue/getIssue';
import { Issue } from '@state/type';
import IssueDetailPresenter from './IssueDetailPresenter';

const IssueDetailContainer: FC = () => {
  const location = useLocation();
  const issueId = location.pathname.split('/').slice(-1)[0];

  const [issue, setIssue] = useState<Issue>({} as Issue);

  useEffect(() => {
    (async () => {
      const currentIssue = await getIssue(issueId);
      if (currentIssue) setIssue(currentIssue);
    })();
  }, []);

  return <IssueDetailPresenter issue={issue} />;
};

export default IssueDetailContainer;
