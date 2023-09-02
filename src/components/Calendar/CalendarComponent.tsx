import React, { useState } from 'react';
import moment from 'moment';
import { styled } from 'styled-components';
import DateItem from './DateItem';

const CalendarComponent = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [today, setToday] = useState(moment());
  moment.updateLocale('eu', {
    week: {
      dow: 1,
    },
  });
  const startDate = today.clone().startOf('month').startOf('week');
  const day = startDate.clone().subtract(1, 'day');
  const daysOfMonth = [...Array(42)].map(() => day.add(1, 'day').clone());
  const thisMonth = today.clone().add(1, 'week').format('MMMM ');
  const setPrevMonth = () => {
    setToday((prev) => prev.clone().subtract(1, 'month'));
  };
  const setThisMonth = () => {
    setToday(moment());
  };
  const setNextMonth = () => {
    setToday((prev) => prev.clone().add(1, 'month'));
  };

  return (
    <main>
      <HeaderWrapper>
        <HeaderTopRow>
          <section>
            <h1>{thisMonth}</h1>
            <p>{startDate.clone().add(1, 'week').format('Y')}</p>
          </section>
          <ButtonControlWrapper>
            <button onClick={setPrevMonth}>&#60;</button>
            <button className="todayBtn" onClick={setThisMonth}>
              Today
            </button>
            <button onClick={setNextMonth}>&#62;</button>
          </ButtonControlWrapper>
        </HeaderTopRow>
        <DaysOfWeekWrapper>
          {daysOfWeek.map((item) => (
            <DayOfWeek
              $weekendDay={item === 'Sat' || item === 'Sun'}
              key={item}
            >
              {item}
            </DayOfWeek>
          ))}
        </DaysOfWeekWrapper>
      </HeaderWrapper>
      <DatesWrapper>
        {daysOfMonth.map((dayItem) => {
          return (
            <DateItem
              thisMonth={thisMonth}
              date={dayItem.format('D MMM Y ddd')}
              key={dayItem.format('D M Y')}
            />
          );
        })}
      </DatesWrapper>
    </main>
  );
};
const HeaderWrapper = styled.section`
  background-color: #1f1e1e;
  section {
    display: flex;
  }
  h1 {
    font-size: 35px;
    color: white;
    padding: 10px;
  }
  p {
    font-size: 35px;
    font-weight: 400;
    padding: 10px 0;
    color: white;
  }
`;
const ButtonControlWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  gap: 1px;
  button {
    padding: 3px 7px;
    border: 0;
    background-color: #555555;
    color: white;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
    background-color: #4d4d4d;
  }
  button:active {
    background-color: #444444;
  }
  .todayBtn {
    padding: 3px 16px;
  }
`;
const HeaderTopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DaysOfWeekWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #404040;
`;
const DayOfWeek = styled.h2<{ $weekendDay?: boolean }>`
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  margin-right: 10px;

  color: ${(props) => (props.$weekendDay ? '#7e7e7e' : 'white')};
`;
const DatesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  background-color: #404040;
  grid-gap: 1px;
`;
export default CalendarComponent;
