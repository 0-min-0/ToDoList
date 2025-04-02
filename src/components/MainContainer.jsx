import React from 'react'
import { Button } from '../UI/Button'
import { TaskForm } from './TaskForm'
import { Options } from './Options'
import { TaskList } from './TaskList'
import { TaskProvider } from '../context/context'
import '../styles/index.css'

export const MainContainer = () => {
  return (
    <TaskProvider>
      <div className='min-w-[30%] flex flex-col p-[40px] shadow-mine font-[font-mine] gap-[10px] rounded-[10px]'>
      <h2 className='font-bold text-center text-[25px]'>To-Do List</h2>
      <TaskForm />
      <Options />
      <TaskList />
    </div>
    </TaskProvider>
  )
}

