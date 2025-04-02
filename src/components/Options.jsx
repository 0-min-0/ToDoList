import React from 'react'
import { Button } from '../UI/Button'

export const Options = () => {

  const buttonStyle = 'bg-white py-[10px] px-[15px] rounded-[6px] border-[1px] border-gray-500 cursor-pointer'

  return (
    <div>
      <Button btnStyle='w-[100%] py-[10px] my-[10px] bg-[#2b7fff] rounded-[6px] text-white cursor-pointer' btnType='submit' name='Add Task' />
      <div className='flex justify-between mt-[10px]'>
      <Button btnStyle={ buttonStyle } btnType='button' name='All' />
      <Button btnStyle={ buttonStyle } btnType='button' name='Pending' />
      <Button btnStyle={ buttonStyle } btnType='button' name='Completed' />
      </div>
    </div>
  )
}

