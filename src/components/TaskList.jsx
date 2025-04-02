import React from 'react'
import { Task } from '../UI/Task'
import { useTasks } from '../context/context'

export const TaskList = () => {

  const { tasks } = useTasks()

  return (
    <div className='flex border-[1px] border-[#1663d8] p-[25px] rounded-[6px] mt-[10px]'>
      <ul>
      {tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  )
}

