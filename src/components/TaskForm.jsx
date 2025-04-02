import React from 'react'
import '../styles/index.css'

export const TaskForm = () => {

  const style = 'py-[10px] px-[15px] rounded-[6px] border-[1px] border-gray-500'

  return (
    <form 
      className='flex flex-col gap-[15px]' 
      action=''>
        <input 
           className={style} 
           type='text' 
           placeholder='Title' 
        />
        <textarea 
           className={style} 
           placeholder='Description'>
        </textarea>
    </form>
  )
}

