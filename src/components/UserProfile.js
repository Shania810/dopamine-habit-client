import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api.utils.js'
import { ImageProfile } from './commons.js'
export const UserProfile = () => {
    const[user,setUser] = useState({}) 
    const sendToUser = useNavigate()
    const getUser = async() =>{
       try {
         const data =  await Api.getUser()
         setUser(data)
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
       getUser()
    },[])
  return (
    <div onClick={()=> sendToUser('/user')} >
    <ImageProfile src={user.imageURL} alt={user.imageURL} />
       <b>Hi,{user.username}</b>
    </div>
  )
}
