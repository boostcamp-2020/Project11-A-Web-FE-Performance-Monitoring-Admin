import React, { useEffect, useState, FC } from 'react';
import { useSelector, DefaultRootState } from 'react-redux';
import getIssues from '@api/issue/getIssues';
import AlertDialog from '@common/AlertDialog';

import { Issue, Docs } from '@state/type';
import IssueList from './issuelist';

interface State extends DefaultRootState {
  curProjectReducer: {
    projectId: string;
  };
}

const PAGINATION_LIMIT = 20;
const PAGE = 1;
const ALERT_TITLE = '선택된 프로젝트가 없습니다';
const ALERT_CONTENT = '프로젝트를 선택한 후 이슈를 확인해주세요';

const IssueListContainer: FC = () => {
  const { projectId } = useSelector((state: State) => state.curProjectReducer);
  if (!projectId) {
    return (
      <AlertDialog
        title={ALERT_TITLE}
        link="/project"
        content={ALERT_CONTENT}
      />
    );
  }
  const [issues, setIssues] = useState<Docs<Issue>>({});

  useEffect(() => {
    (async () => {
      const issueDocs = await getIssues(PAGE, projectId, PAGINATION_LIMIT);
      if (issueDocs) setIssues(issueDocs);
    })();
  }, []);

  return <IssueList issues={issues} />;
};

export default IssueListContainer;
