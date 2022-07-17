import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'



const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center mt-40'>
      <h1 className='text-4xl text-orange-600'>THIS PAGE DOES NOT EXIST</h1>
        <Button text='Go Back' handleClick={()=>{navigate('/')}} />
    </div>
  )
}

export default ErrorPage