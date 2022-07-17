import React from 'react'


const Button = ({ text, handleClick }) => {
  return (
    <div>
        <button className='transition duration-700 text-center text-zinc-300 bg-orange-500 my-8 p-2 rounded-lg cursor-pointer
         hover:bg-orange-700 text-3xl font-semibold' 
          onClick={handleClick}>
           {text}
        </button>
    </div>
  )
}

export default Button