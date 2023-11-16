import moment from 'moment';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useModalContext } from '../../context/ModalContext';
import { url } from './CalendarComponent';
const EditModal = () => {
  const {
    setModal,
    dateInput,
    setDateInput,
    event,
    modalPos,
    setEvent,
    setEventCreated,
    modalType,
  } = useModalContext();
  const [color, setColor] = useState(event?.color ? event.color : '#56a8bd');
  function createEvent(toRemove: Boolean = false) {
    console.log(toRemove);
    fetch(`${url}/events${modalType === 'edit' ? `/${event?.id}` : ''}`, {
      method: toRemove ? 'DELETE' : modalType === 'edit' ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: event?.title,
        timestamp: Number(moment(dateInput).format('X')),
        color: color,
      }),
    }).then((res) => res.json());
  }
  const handleChange = () => {
    setModal(false);
    setEvent({ ...event, title: '' });
    setEventCreated((prev) => prev + 1);
  };
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
        value={event?.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
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
        {modalType === 'edit' && (
          <button
            onClick={() => {
              createEvent(true);
              handleChange();
            }}
          >
            Remove event
          </button>
        )}
        <button
          onClick={() => {
            createEvent();
            handleChange();
          }}
        >
          {modalType === 'edit' ? 'Edit event' : 'Create Event'}
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
