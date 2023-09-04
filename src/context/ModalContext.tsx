import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface IModal {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  eventCreated: number;
  setEventCreated: Dispatch<SetStateAction<number>>;
  dateInput: string;
  setDateInput: Dispatch<SetStateAction<string>>;
  eventTitle: string;
  setEventTitle: Dispatch<SetStateAction<string>>;

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
  eventTitle: '',
  setEventTitle: () => {},

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
  const [eventTitle, setEventTitle] = useState('');
  const [eventCreated, setEventCreated] = useState(0);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        dateInput,
        setDateInput,
        eventTitle,
        setEventTitle,
        modalPos,
        setModalPos,
        eventCreated,
        setEventCreated,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
