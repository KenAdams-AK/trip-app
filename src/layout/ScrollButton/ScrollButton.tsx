import { ReactNode } from "react";

import "./ScrollButton.scss";

type ScrollButtonProps = {
  isHidden: boolean;
  scrollOffset: number;
  handleScroll: (scrollOffset: number) => void;
  children: ReactNode;
};

export function ScrollButton({
  isHidden,
  scrollOffset,
  handleScroll,
  children,
}: ScrollButtonProps) {
  if (isHidden) {
    return children;
  }

  return (
    <>
      <button
        className="scroll-button"
        type="button"
        onClick={() => handleScroll(-scrollOffset)}
      >
        &#x3c;
      </button>
      {children}
      <button
        className="scroll-button"
        type="button"
        onClick={() => handleScroll(scrollOffset)}
      >
        &#x3e;
      </button>
    </>
  );
}
