import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { IEvent } from '../types/IEvent';
interface IModal {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  eventCreated: number;
  setEventCreated: Dispatch<SetStateAction<number>>;
  dateInput: string;
  setDateInput: Dispatch<SetStateAction<string>>;
  modalType: string;
  setEvent: any;
  setModalType: Dispatch<SetStateAction<string>>;
  event: IEvent | null;
  modalPos: {
    x: number;
    y: number;
  };
  setModalPos: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

const ModalContext = createContext<IModal>({
  modal: false,
  setModal: () => {},
  eventCreated: 0,
  setEventCreated: () => {},
  dateInput: '',
  setDateInput: () => {},
  modalType: '',
  setModalType: () => {},
  event: null,
  setEvent: () => {},
  modalPos: {
    x: 0,
    y: 0,
  },
  setModalPos: () => {},
});

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: any) => {
  const [modal, setModal] = useState(false);
  const [dateInput, setDateInput] = useState('');
  const [eventCreated, setEventCreated] = useState(0);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
  const [modalType, setModalType] = useState('');

  const [event, setEvent] = useState(null);
  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        dateInput,
        setDateInput,
        modalPos,
        setModalPos,
        eventCreated,
        setEventCreated,
        modalType,
        setModalType,
        event,
        setEvent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
