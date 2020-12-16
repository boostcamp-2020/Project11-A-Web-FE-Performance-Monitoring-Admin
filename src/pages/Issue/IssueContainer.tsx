import React, { useEffect, useState, FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import getIssue from '@api/issue/getIssue';
import { Issue } from '@store/type';
import IssuePresenter from './components/IssuePresenter';

interface IssueRouteParams {
  id: string;
}

const IssueContainer: FC = () => {
  const match = useRouteMatch<IssueRouteParams>();
  const issueId = match.params.id;

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
