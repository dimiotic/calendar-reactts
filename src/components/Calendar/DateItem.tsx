import moment from 'moment';
import React, { FC } from 'react';
import { styled } from 'styled-components';
interface DateObj {
  date: string;
}
const DateItem: FC<DateObj> = ({ date }) => {
  return (
    <Wrapper>
      {date.split(' ')[0] === '1'
        ? date.split(' ').join('. ')
        : date.split(' ')[0]}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  background-color: #1f1e1e;
  color: white;
  justify-content: flex-end;
  min-height: 100px;
  min-width: 140px;
`;
export default DateItem;
