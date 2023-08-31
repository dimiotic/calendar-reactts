import React, { FC } from 'react';
import { styled } from 'styled-components';
import DateItem from './DateItem';
import { Moment } from 'moment';

const CalendarDates: FC<any> = ({ startDate }) => {
  const day = startDate.clone().subtract(1, 'day');
  const daysOfMonth = [...Array(42)].map(() => day.add(1, 'day').clone());
  return (
    <Wrapper>
      {daysOfMonth.map((dayItem, index) => {
        return (
          <DateItem
            date={dayItem.format('D MMM')}
            key={dayItem.format('D M Y')}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  background-color: #404040;
  grid-gap: 1px;
`;

export default CalendarDates;
