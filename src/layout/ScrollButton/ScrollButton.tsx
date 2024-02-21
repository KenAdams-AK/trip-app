import "./ScrollButton.scss";

type ScrollButtonProps = {
  type: "left" | "right";
  isHidden: boolean;
  scrollOffset: number;
  handleScroll: (scrollOffset: number) => void;
};

export function ScrollButton({
  type,
  isHidden,
  scrollOffset,
  handleScroll,
}: ScrollButtonProps) {
  if (isHidden) {
    return null;
  }

  return (
    <button
      className="scroll-button"
      type="button"
      onClick={() =>
        handleScroll(type === "left" ? -scrollOffset : scrollOffset)
      }
    >
      {type === "left" ? "<" : ">"}
    </button>
  );
}
