import React, { FC } from 'react';
import { StackTrace } from '@store/type';
import EventDetailHeader from '../EventDetailHeader';
import StackHeader from './StackHeader';
import StackContext from './StackContext';

interface Props {
  stacktrace: StackTrace[];
  errorContexts: string[][];
}

const ErrorStack: FC<Props> = ({ stacktrace, errorContexts }: Props) => (
  <div>
    <EventDetailHeader title="ERROR STACK" />
    {stacktrace.length !== 0 &&
      stacktrace.map((stack, idx) => (
        <StackHeader stacktrace={stack} key={idx} idx={idx}>
          {errorContexts.length !== 0 && errorContexts[idx].length ? (
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
