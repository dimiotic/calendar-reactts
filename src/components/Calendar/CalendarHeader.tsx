import React from 'react';
import { styled } from 'styled-components';

const CalendarHeader = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <Wrapper>
      {daysOfWeek.map((item) => (
        <DayOfWeek $weekendDay={item === 'Sat' || item === 'Sun'} key={item}>
          {item}
        </DayOfWeek>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #1f1e1e;
  border-bottom: 1px solid #404040;
`;
const DayOfWeek = styled.h2<{ $weekendDay?: boolean }>`
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  color: ${(props) => (props.$weekendDay ? '#7e7e7e' : 'white')};
`;
export default CalendarHeader;
