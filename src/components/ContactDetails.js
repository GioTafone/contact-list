import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import Button from './Button'

const ContactDetails = () => {

    const { id } = useParams()
    const { users } = useFetch('https://jsonplaceholder.typicode.com/users/' + id)
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center bg-zinc-300 rounded-lg shadow-md my-6 mx-20 w-96'>
            {users.id && 
                <div className='flex flex-col justify-center'>
                    <p className='mt-2'>NAME: {users.name}</p>
                    <p>USERNAME: {users.username}</p>
                    <p>EMAIL: {users.email}</p>
                    <p>PHONE: {users.phone}</p>
                    <p>COMPANY: {users.company.name}</p>
                    <p>WEBSITE: {users.website}</p>
                    <p>ADDRESS
                        <li>STREET: {users.address.street}</li>
                        <li>SUITE: {users.address.suite}</li>
                        <li>CITY: {users.address.city}</li>
                        <li>ZIPCODE: {users.address.zipcode}</li>
                    </p>
                    <div className='flex justify-center'>
                    <Button text='Go Back' handleClick={()=>{navigate('/')}} />
                    </div>
                </div>}
        </div>
    )



}

export default ContactDetails