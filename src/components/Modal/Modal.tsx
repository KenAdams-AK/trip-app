import { ReactNode, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

import { useModalContext } from "@/hooks/useModalContext";

import "./Modal.scss";

type ModalProps = {
  children: ReactNode;
};

export function Modal({ children }: ModalProps) {
  const { isOpen } = useModalContext();
  const containerElement = useMemo(() => document.querySelector("#modal"), []);
  const bodyElement = useMemo(() => document.querySelector("body"), []);

  useEffect(() => {
    if (!isOpen || bodyElement === null) {
      return undefined;
    }
    bodyElement.classList.add("modal-active");

    return () => bodyElement.classList.remove("modal-active");
  }, [bodyElement, isOpen]);

  if (!isOpen || containerElement === null) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal__overlay">
      <div className="modal__body">{children}</div>
    </div>,
    containerElement as HTMLDivElement,
  );
}
