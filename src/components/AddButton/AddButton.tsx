import { ComponentPropsWithoutRef } from "react";

import "./AddButton.scss";

type AddButtonProps = ComponentPropsWithoutRef<"button">;

export function AddButton(props: AddButtonProps) {
  return (
    <button className="add-button" type="button" {...props}>
      <span>&#43;</span> Add trip
    </button>
  );
}
