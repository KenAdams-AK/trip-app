import { useContext } from "react";

import { ModalContext } from "@/context/modalContext";

export function useModalContext() {
  return useContext(ModalContext);
}
