import React, { FC, Dispatch } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h2`
  display: inline-block;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const useStyles = makeStyles((theme) => ({
  eventId: {
    color: '#fff',
    backgroundColor: theme.palette.info.dark,
    borderRadius: 6,
    marginLeft: 10,
    padding: '1px 6px',
  },
  button: {
    borderRadius: 6,
  },
}));

interface Props {
  eventId: string;
  occuredAt: string;
  eventIdx: number;
  setEventIdx: Dispatch<React.SetStateAction<number>>;
  eventNum: number;
}

const EventHeader: FC<Props> = ({
  eventId,
  occuredAt,
  eventIdx,
  setEventIdx,
  eventNum,
}: Props) => {
  const classes = useStyles();

  const handleClickOlder = () => {
    setEventIdx(eventIdx + 1);
  };

  const handleClickNewer = () => {
    setEventIdx(eventIdx - 1);
  };

  const isOldest = eventIdx === eventNum - 1;

  return (
    <Container>
      <div>
        <TitleContainer>
          <Header>Event </Header>
          <span className={classes.eventId}> # {eventId}</span>
        </TitleContainer>
        <span>Occured at: {new Date(occuredAt).toLocaleString()}</span>
      </div>
      <div>
        <ButtonGroup>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className={classes.button}
            onClick={handleClickOlder}
            disabled={isOldest}
          >
            Older
          </Button>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className={classes.button}
            onClick={handleClickNewer}
            disabled={eventIdx === 0}
          >
            Newer
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default EventHeader;
