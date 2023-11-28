import React from 'react'
import s from "./Button.module.scss"
import cn from "../../utils/cn/cn"
// eslint-disable-next-line react/prop-types
export const Button = ({children, variant}) => {
  return (
    <button
      className={cn(
        s.score__bad__wrapper,
        {
          [s.button__yellow]: variant === "yellow",
          [s.button__second]: variant === "second",
          [s.button__third]: variant === "third",
        },
        []
      )}
    >
      {children}
    </button>
  );
}
