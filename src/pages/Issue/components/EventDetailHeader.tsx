import React, { FC } from 'react';

interface Props {
  title: string;
}

const EventDetailHeader: FC<Props> = ({ title }: Props) => <h2>{title}</h2>;

export default EventDetailHeader;
