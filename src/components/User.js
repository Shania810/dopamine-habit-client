import React, { useState, useEffect } from 'react'
import Api from '../utils/api.utils'
import { UploadImageForm } from './UploadImageForm'

export const User = () => {
    const [user,setUser] = useState({})
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')


    const [imageURL, setImageURL] = useState('')
    const [file, setFile] = useState(null)
    const handleChangeImg = (e) => {
      const fileObject = e.target.files[0]
      setFile(fileObject)
      if (file) {
        const imageURL = URL.createObjectURL(fileObject)
        setImageURL(imageURL)
      } else {
        setImageURL('')
      }
    }
    const uploadImage = async()=>{
      try {
       await Api.uploadImage(file)
       await getUser()
      } catch (error) {
        
      }
    }
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
    const addNewPassword = async()=>{
      try {
        await Api.putPassword({password})
        await getUser()
        setPassword('')
      } catch (error) {
        console.log(error)
      }
    }
    const addNewUsername = async()=>{
      try {
        await Api.putUsername({username})
        await getUser()
        setUsername('')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
     <UploadImageForm
          imageURL={imageURL}
          handleChangeImg={handleChangeImg}
        />
        <button onClick={uploadImage}>Update photo</button>
      <img src={user.imageURL} alt={user.imageURL} />
      <h1>Hi</h1>
      <h2>Username: {user.username}</h2>
      <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
      <button onClick={addNewUsername} >Update</button>
      <h2>Email: {user.email}</h2>
      <h2>Password:</h2>
      <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={addNewPassword} >Update</button>
    </div>
  )
}
