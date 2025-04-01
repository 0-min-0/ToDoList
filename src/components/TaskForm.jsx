import React from 'react'
import '../styles/index.css'

export const TaskForm = () => {
  return (
    <form className='bg-gray-800' action=''>
        <input type='text' placeholder='Title' />
        <textarea placeholder='Description'></textarea>
    </form>
  )
}

