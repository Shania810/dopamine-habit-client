import React, { useState, useEffect } from 'react'
import Api from '../utils/api.utils'

export const User = () => {
    const [user,setUser] = useState({})
    const getUser = async() =>{
        try {
          const data = await Api.getUser()
          setUser(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      getUser()
    }, [])
  return (
    <div>
      <img src={user.imageURL} alt={user.imageURL} />
      <h1>Hi</h1>
      <h2>Username: {user.username}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Password:</h2>
    </div>
  )
}
