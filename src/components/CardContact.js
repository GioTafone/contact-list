import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
 
const CardContact = ({ users }) => {
  return ( 
    <div className='flex flex-row flex-wrap justify-center'>
      {users.map((user) => (
        <div key={user.id} className='flex flex-col items-center bg-zinc-300 rounded-lg shadow-md my-6 mx-20 w-96'>
          <h1 className='flex items-center justify-center rounded-full w-28 h-28 bg-orange-500 text-zinc-100 text-4xl shadow-lg my-5'>
                {user.name[0]}
          </h1>
          <p className='text-xl font-extrabold'>
            {user.name}
          </p>
          <p className='text-lg font-semibold'>
            @{user.username}
          </p>
          <a href={`http://${user.website}`} className='text-orange-500 text-lg'>
            {user.website}
          </a>
          <Link to={`/contact/${user.id}`}>
            <Button text='More Info'/>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CardContact