import React from 'react'
import { Button } from './Button'

export const Task = ({ taskTitle, taskDesc }) => {
  return (
    <li>
        <div className='taskItem'>
            <div className='mark'>
            <input type='checkbox' />
            <h3>{taskTitle}</h3>
            </div>
            <p>{taskDesc}</p>
            <Button btnType='button' btnClass='deleteBtn' name='Delete' />
        </div>
    </li>
  )
}

