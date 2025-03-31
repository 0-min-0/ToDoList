import React from 'react'
import { Button } from '../UI/Button'
import { TaskForm } from './TaskForm'
import { Options } from './Options'
import { TaskList } from './TaskList'
import '../styles/index.css'

export const MainContainer = () => {
  return (
    <div className='container'>
      <h2>To-Do List</h2>
      <TaskForm />
      <Options />
      <TaskList />
    </div>
  )
}

