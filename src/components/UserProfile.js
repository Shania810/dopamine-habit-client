import React, { useEffect, useState } from 'react'
import Api from '../utils/api.utils.js'
export const UserProfile = () => {
    const[username,setUsername] = useState('')
    useEffect(()=>{
       
    },[])
  return (
    <div>
       <b>Olá,{username}</b>
    </div>
  )
}
