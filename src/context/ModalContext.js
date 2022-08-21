import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, isMessageSent, setIsMessageSent }}
    >
      {children}
    </ModalContext.Provider>
  );
}
