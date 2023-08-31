import moment from 'moment';
import React from 'react';
import { styled } from 'styled-components';

const CalendarComponent = () => {
  moment.updateLocale('en', {
    week: {
      dow: 1,
    },
  });
  const startDate = moment().clone().startOf('month').startOf('week');
  // const endDate = moment().clone().endOf('month').endOf('week');

  // const daysOfMonth = [];
  // const day = startDate;
  // while (!day.isAfter(endDate)) {
  //   daysOfMonth.push(day.clone());
  //   day.add(1, 'day');
  // }
  const day = startDate.clone().subtract(1, 'day');
  const daysOfMonth = [...Array(42)].map(() => day.add(1, 'day').clone());
  return (
    <Wrapper>
      {daysOfMonth.map((dayItem, index) => {
        console.log(day);

        return (
          <div key={dayItem.format('D M Y')}>
            {dayItem.format('D') === '1'
              ? dayItem.format('D MMM').split(' ').join('. ')
              : dayItem.format('D')}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;
export default CalendarComponent;
