import React from 'react'
import { Button } from '../UI/Button'

export const Options = () => {
  return (
    <div className='btnContainer'>
      <Button btnClass='submitBtn' btnType='submit' name='Add Task' />
      <div className='btns'>
      <Button btnClass='btn' btnType='button' name='All' />
      <Button btnClass='btn' btnType='button' name='Pending' />
      <Button btnClass='btn' btnType='button' name='Completed' />
      </div>
    </div>
  )
}

