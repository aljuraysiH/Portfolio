import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};

export default useModal;
