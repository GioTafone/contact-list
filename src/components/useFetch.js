import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('ran')
    fetch(url)
        .then(res => res.json())
        .then(data => {
          setUsers(data)
        })
        .catch(err => {
          console.log('There was an error', err.message)
        })
  }, [url])
  return { users }
}


export default useFetch