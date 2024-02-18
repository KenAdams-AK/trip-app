import { MouseEventHandler, ReactNode, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

type ModalProps = {
  handleClose: MouseEventHandler<HTMLElement>;
  children: ReactNode;
};

export function Modal({ handleClose, children }: ModalProps) {
  const containerElement = useMemo(() => document.querySelector("#modal"), []);
  const bodyElement = useMemo(() => document.querySelector("body"), []);

  useEffect(() => {
    if (bodyElement === null) {
      return undefined;
    }

    bodyElement.classList.add("modal-active");

    return () => bodyElement.classList.remove("modal-active");
  }, [bodyElement]);

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
