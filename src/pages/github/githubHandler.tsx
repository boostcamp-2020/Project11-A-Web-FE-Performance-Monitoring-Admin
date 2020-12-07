import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { useAsync } from 'react-async';

import githubAxios from '@api/auth/github';

const GithubHandler: React.FC<RouteComponentProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const code = props.location.search.split('=')[1];
  const { data, error, isLoading } = useAsync({
    promiseFn: githubAxios,
    code,
  });
  if (isLoading) return <div>로딩중..</div>;
  if (error) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  if (!data) return null;

  window.localStorage.setItem('token', data.token);
  window.localStorage.setItem('nickname', data.nickname);

  return <Redirect to={{ pathname: '/project' }} />;
};

export default GithubHandler;
