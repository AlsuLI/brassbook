import React from 'react'
import s from "./Card.module.scss"

// eslint-disable-next-line react/prop-types
export const Card = ({variant}) => {
  return (
    <img className={s.img__main} src={variant} alt={variant} />
  )
}
