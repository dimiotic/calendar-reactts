import React from 'react';
import CalendarDates from './CalendarDates';
import moment from 'moment';
import CalendarHeader from './CalendarHeader';

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
  console.log(typeof startDate);
  return (
    <main>
      <CalendarHeader />
      <CalendarDates startDate={startDate} />
    </main>
  );
};

export default CalendarComponent;
