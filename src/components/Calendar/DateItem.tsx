import moment, { Moment } from 'moment';
import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { IEvent } from '../../types/IEvent';
import { useScrollbar } from '../../hooks/useScrollbar';

interface DateObj {
  date: Moment;
  thisMonth: string;
  events: IEvent[];
  setModal: Dispatch<SetStateAction<boolean>>;
}
const DateItem: FC<DateObj> = ({ date, thisMonth, events, setModal }) => {
  const scrollableWrapper = useRef(null);
  useScrollbar(scrollableWrapper);

  return (
    <Wrapper
      onDoubleClick={() => setModal(true)}
      $isThisMonth={date.format('MMM') === thisMonth.substring(0, 3)}
      $isToday={moment().format('D M y') === date.format('D M y')}
      $isWeekend={date.format('ddd') === 'Sun' || date.format('ddd') === 'Sat'}
    >
      <DateRow>
        {date.format('D') === '1' ? (
          <>
            <p>{date.format('D')}</p> <h3>{date.format('MMM')}</h3>
          </>
        ) : (
          <p>{date.format('D')}</p>
        )}
      </DateRow>

      <div ref={scrollableWrapper}>
        <EventListWrapper>
          {events
            .filter(
              (event) =>
                event.timestamp >= Number(date.format('X')) &&
                event.timestamp <= Number(date.clone().endOf('day').format('X'))
            )
            .map((event) => (
              <button key={event.id}>
                {event.title.length > 24
                  ? event.title.substring(0, 24) + '...'
                  : event.title}
              </button>
            ))}
        </EventListWrapper>
      </div>
    </Wrapper>
  );
};
const EventListWrapper = styled.div`
  padding: 0 7px 0 3px;
  button {
    z-index: 1;
    display: block;
    background-color: #e683e679;
    width: 100%;
    color: white;
    min-height: 30px;
    border: none;
    margin: 2px;
    text-align: left;
    padding: 0 7px;
    font-size: 18px;
  }
`;
const DateRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Wrapper = styled.div<{
  $isToday?: boolean;
  $isThisMonth?: boolean;
  $isWeekend?: boolean;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.$isWeekend ? '#2b2b2b' : '#1f1e1e')};

  P {
    margin: 5px 3px;
    padding: 3px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;

    color: ${(props) => (props.$isWeekend ? '#838383' : 'white')};

    color: ${(props) => (props.$isThisMonth ? '' : '#3d3d3d')};
    color: ${(props) => (props.$isToday ? 'black' : '')};

    font-size: 17px;
    background-color: ${(props) => (props.$isToday ? '#eb2525' : '')};
  }
  h3 {
    font-weight: 400;
    padding: 6px 0;
    color: ${(props) => (props.$isWeekend ? '#818181' : 'white')};

    color: ${(props) => (props.$isThisMonth ? '' : '#505050')};
    margin-right: 10px;
  }
  height: 143px;
  min-width: 140px;
`;

export default DateItem;
