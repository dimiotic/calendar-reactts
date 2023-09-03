import moment, { Moment } from 'moment';
import React, { FC } from 'react';
import { styled } from 'styled-components';
import { IEvent } from '../../types/IEvent';
interface DateObj {
  date: Moment;
  thisMonth: string;
  events: IEvent[];
}
const DateItem: FC<DateObj> = ({ date, thisMonth, events }) => {
  return (
    <div>
      <Wrapper
        $isThisMonth={date.format('MMM') === thisMonth.substring(0, 3)}
        $isToday={moment().format('D M y') === date.format('D M y')}
        $isWeekend={
          date.format('ddd') === 'Sun' || date.format('ddd') === 'Sat'
        }
      >
        {date.format('D') === '1' ? (
          <>
            <p>{date.format('D')}</p> <h3>{date.format('MMM')}</h3>
          </>
        ) : (
          <p>{date.format('D')}</p>
        )}
      </Wrapper>
      <EventListWrapper>
        {events
          .filter(
            (event) =>
              event.timestamp >= Number(date.format('X')) &&
              event.timestamp <= Number(date.clone().endOf('day').format('X'))
          )
          .map((event) => (
            <li key={event.id}>{event.title}</li>
          ))}
      </EventListWrapper>
    </div>
  );
};
const EventListWrapper = styled.ul`
  margin: unset;
  list-style-position: inside;
  padding-left: 4px;
`;
const Wrapper = styled.div<{
  $isToday?: boolean;
  $isThisMonth?: boolean;
  $isWeekend?: boolean;
}>`
  display: flex;
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
  justify-content: flex-end;
  min-height: 120px;
  min-width: 140px;
`;

export default DateItem;
