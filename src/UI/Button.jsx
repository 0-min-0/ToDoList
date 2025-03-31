import React from 'react'

export const Button = ({ btnClass, name, btnType }) => {
  return (
    <button type={btnType} className={btnClass}>{name}</button>
  )
}

