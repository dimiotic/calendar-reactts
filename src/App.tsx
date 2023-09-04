import React from 'react';
import { CalendarComponent } from './components/';
import { ModalProvider } from './context/ModalContext';
function disableContextMenu(event: any) {
  event.preventDefault();
}
function App() {
  return (
    <div onContextMenu={disableContextMenu}>
      <ModalProvider>
        <CalendarComponent />
      </ModalProvider>
    </div>
  );
}

export default App;
