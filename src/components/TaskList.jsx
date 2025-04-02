import React from 'react'
import { Task } from '../UI/Task'

export const TaskList = () => {
  return (
    <div className='flex border-[1px] border-[#1663d8] p-[25px] rounded-[6px] mt-[10px]'>
      <ul>
        <Task />
      </ul>
    </div>
  )
}

