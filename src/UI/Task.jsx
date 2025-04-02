import React from 'react'
import { Button } from './Button'

export const Task = ({ taskTitle, taskDesc }) => {
  return (
    <li>
        <div className=''>
            <div className='flex gap-[15px] mb-[10px]'>
            <input type='checkbox' />
            <h3>{taskTitle}</h3>
            </div>
            <p>{taskDesc}</p>
            <Button btnType='button' btnStyle='w-[60%] py-[10px] mt-[20px] bg-[#ff4618] rounded-[6px] text-white cursor-pointer' name='Delete' />
        </div>
    </li>
  )
}

