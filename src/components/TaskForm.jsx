import React from 'react'
import { useTasks } from '../context/context'
import '../styles/index.css'

export const TaskForm = () => {
  const { taskDetails, setTaskDetails, addTask } = useTasks();
  
  const style = 'py-[10px] px-[15px] rounded-[6px] border-[1px] border-gray-500'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  return (
    <form 
      onSubmit={addTask}
      className='flex flex-col gap-[15px]' 
    >
      <input 
        className={style} 
        type='text' 
        name="title"
        placeholder='Title' 
        value={taskDetails.title}
        onChange={handleChange}
      />
      <textarea 
        className={style} 
        name="description"
        placeholder='Description'
        value={taskDetails.description}
        onChange={handleChange}
      />
      <button 
        type='submit' 
        className='w-[100%] py-[10px] my-[10px] bg-[#2b7fff] rounded-[6px] text-white cursor-pointer'
      >
        Add Task
      </button>
    </form>
  )
}