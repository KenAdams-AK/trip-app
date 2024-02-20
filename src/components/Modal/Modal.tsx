import { ReactNode, useCallback, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

import { useModalContext } from "@/hooks/useModalContext";

import "./Modal.scss";

type ModalProps = {
  children: ReactNode;
};

export function Modal({ children }: ModalProps) {
  const { isOpen, setIsOpen } = useModalContext();
  const containerElement = useMemo(() => document.querySelector("#modal"), []);
  const bodyElement = useMemo(() => document.querySelector("body"), []);

  useEffect(() => {
    if (bodyElement === null) {
      return undefined;
    }
    bodyElement.classList.add("modal-active");

    return () => bodyElement.classList.remove("modal-active");
  }, [bodyElement]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  if (!isOpen || containerElement === null) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal__overlay">
      <button
        className="modal__close-button"
        type="button"
        onClick={handleClose}
      >
        &times;
      </button>
      <div className="modal__body">{children}</div>
    </div>,
    containerElement as HTMLDivElement,
  );
}
