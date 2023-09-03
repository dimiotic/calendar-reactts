import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface ModalProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const EditModal: React.FC<ModalProps> = ({ modal, setModal }) => {
  return (
    <ModalWrapper
      id="modalWrapper"
      //@ts-ignore

      onClick={(e) => (e.target.id === 'modalWrapper' ? setModal(false) : null)}
    >
      <ModalWindow>
        <input type="date" />
        <div className="modalBtns">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button onClick={() => setModal(false)}>Create Event</button>
        </div>
      </ModalWindow>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: relative;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #000000ac;
  z-index: 99;
`;
const ModalWindow = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 140px;
  background-color: #494949;
  border-radius: 7px;
  top: calc(50% - 70px);
  color: white;
  font-size: 54px;
  left: calc(50% - 150px);
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
  input {
    cursor: pointer;
    margin: 10px;
    padding: 7px;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 15px;
  }
`;
export default EditModal;
