import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { useAsync } from 'react-async';

import { createAuthAxios } from '@utils/axios';
import githubAxios from '@api/auth/github';
import Loading from '@common/Loading';

const GithubHandler: React.FC<RouteComponentProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const code = props.location.search.split('=')[1];
  const { data, error, isLoading } = useAsync({
    promiseFn: githubAxios,
    code,
  });
  if (isLoading) return <Loading />;
  if (error) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  if (!data) return null;

  window.localStorage.setItem('token', data.token);
  window.localStorage.setItem('nickname', data.nickname);
  createAuthAxios();

  return <Redirect to={{ pathname: '/project' }} />;
};

export default GithubHandler;
