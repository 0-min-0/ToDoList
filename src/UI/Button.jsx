import React from 'react'

export const Button = ({ name, btnType, btnStyle }) => {
  return (
    <button type={btnType} className={btnStyle}>{name}</button>
  )
}

