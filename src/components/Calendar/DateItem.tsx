import moment from 'moment';
import React, { FC } from 'react';
import { styled } from 'styled-components';
interface DateObj {
  date: string;
  thisMonth: string;
}
const DateItem: FC<DateObj> = ({ date, thisMonth }) => {
  return (
    <Wrapper
      $isThisMonth={date.split(' ')[1] === thisMonth.substring(0, 3)}
      $isToday={date === moment().format('D MMM Y ddd')}
      $isWeekend={date.split(' ')[3] === 'Sun' || date.split(' ')[3] === 'Sat'}
    >
      {date.split(' ')[0] === '1' ? (
        <>
          <p>{date.split(' ')[0]}</p> <h3>{date.split(' ')[1]}</h3>
        </>
      ) : (
        <p>{date.split(' ')[0]}</p>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div<{
  $isToday?: boolean;
  $isThisMonth?: boolean;
  $isWeekend?: boolean;
}>`
  display: flex;
  background-color: #1f1e1e;
  P {
    margin: 5px 3px;
    padding: 3px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;

    color: ${(props) => (props.$isWeekend ? '#818181' : 'white')};

    color: ${(props) => (props.$isThisMonth ? '' : '#3d3d3d')};
    color: ${(props) => (props.$isToday ? 'black' : '')};

    font-size: 17px;
    background-color: ${(props) => (props.$isToday ? '#eb2525' : '#1f1e1e')};
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
