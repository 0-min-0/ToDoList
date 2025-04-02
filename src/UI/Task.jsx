import React from 'react'
import { Button } from './Button'
import { useTasks } from '../context/context'

export const Task = ({ task }) => {

  const { deleteTask, toggleTaskCompletion } = useTasks()

  return (
    <li>
        <div className=''>
            <div className='flex gap-[15px] mb-[10px]'>
            <input 
              type='checkbox'
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)} 
            />
            <h3 
              className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </h3>
            </div>
            <p 
              className={`${task.completed ? 'line-through text-gray-500' : ''} ml-9`}>
              {task.description}
            </p>
            <Button 
              btnType='button' 
              btnStyle='w-[80%] py-[10px] mt-[20px] bg-[#ff4618] rounded-[6px] text-white cursor-pointer' 
              name='Delete' 
              onClick={() => deleteTask(task.id)}
            />
        </div>
    </li>
  )
}

