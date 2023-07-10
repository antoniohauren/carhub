"use client";

import { CustomButtonProps } from ".";

export function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
