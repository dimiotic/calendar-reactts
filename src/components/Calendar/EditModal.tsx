import moment, { Moment } from 'moment';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { styled } from 'styled-components';
import { useModalContext } from '../../context/ModalContext';
import { url } from './CalendarComponent';
import { IEvent } from '../../types/IEvent';
const EditModal = () => {
  const {
    modal,
    setModal,
    dateInput,
    setDateInput,
    eventTitle,
    setEventTitle,
    modalPos,
    setEventCreated,
  } = useModalContext();
  const [color, setColor] = useState('#56a8bd');
  function createEvent() {
    fetch(`${url}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: eventTitle,
        timestamp: Number(moment(dateInput).format('X')),
        color: color,
      }),
    }).then((res) => res.json());
  }
  return (
    <ModalWindow id="modal" $position={modalPos}>
      <input
        id="modal"
        type="date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
      />
      <input
        id="modal"
        type="text"
        placeholder="name your event"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <input
        className="colorInput"
        id="modal"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className="modalBtns">
        <button onClick={() => setModal(false)}>Cancel</button>
        <button
          onClick={() => {
            createEvent();
            setModal(false);
            setEventTitle('');
            setEventCreated((prev) => prev + 1);
          }}
        >
          Create Event
        </button>
      </div>
    </ModalWindow>
  );
};

const ModalWindow = styled.div<{ $position: { x: number; y: number } }>`
  z-index: 100;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 190px;
  background-color: #494949;
  border-radius: 7px;
  top: ${(props) =>
    props.$position.y > 790 ? props.$position.y - 140 : props.$position.y}px;
  color: white;
  font-size: 54px;
  left: ${(props) =>
    window.innerWidth - props.$position.x < 300
      ? props.$position.x - 300
      : props.$position.x}px;
  .modalBtns {
    display: flex;
    justify-content: space-around;
    button {
      cursor: pointer;
      color: white;
      padding: 10px 20px;
      width: 130px;
      background-color: #575757;
      border: none;
      border-radius: 8px;
    }
    button:hover {
      background-color: #606060;
    }
  }
  .colorInput {
    height: 53px;
    width: 50px;
  }
  input {
    cursor: pointer;
    margin: 3px 10px;
    padding: 7px;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 15px;
  }
`;
export default EditModal;
