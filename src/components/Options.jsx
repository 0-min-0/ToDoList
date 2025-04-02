import React from 'react'
import { Button } from '../UI/Button'

export const Options = () => {

  const buttonStyle = 'bg-white py-[10px] px-[15px] rounded-[6px] border-[1px] border-gray-500 cursor-pointer'

  return (
    <div className='flex justify-between mt-[10px]'>
      <Button
        btnStyle={buttonStyle}
        btnType='button'
        name='All'
        onClick={() => setFilter('all')}
      />
      <Button
        btnStyle={buttonStyle}
        btnType='button'
        name='Pending'
        onClick={() => setFilter('pending')}
      />
      <Button
        btnStyle={buttonStyle}
        btnType='button'
        name='Completed'
        onClick={() => setFilter('completed')}
      />
    </div>
  )
}

