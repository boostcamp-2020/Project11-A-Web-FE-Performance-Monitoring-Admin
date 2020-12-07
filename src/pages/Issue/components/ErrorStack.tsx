import React, { FC } from 'react';
import { StackTrace } from '@state/type';
import EventDetailHeader from './EventDetailHeader';
import StackHeader from './StackHeader';
import StackContext from './StackContext';

interface Props {
  stacktrace: StackTrace[];
  errorContexts: string[][];
}

const ErrorStack: FC<Props> = ({ stacktrace, errorContexts }: Props) => (
  <div>
    <EventDetailHeader title="EXCEPTION" />
    {stacktrace.map((stack, idx) => (
      <StackHeader stacktrace={stack} key={idx}>
        {errorContexts[idx].length ? (
          <StackContext
            contexts={errorContexts[idx]}
            lineno={stack.lineno ? stack.lineno : 0}
          />
        ) : (
          <></>
        )}
      </StackHeader>
    ))}
  </div>
);

export default ErrorStack;
