import { useEffect, useRef } from "react";

export function useHorizontalScroll<T extends HTMLElement>(
  shouldUpdateRef?: boolean,
) {
  const elRef = useRef<T | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return undefined;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel);

    return () => el.removeEventListener("wheel", onWheel);
  }, [shouldUpdateRef]);

  return elRef;
}
