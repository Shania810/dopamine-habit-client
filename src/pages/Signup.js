import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadImageForm } from '../components/UploadImageForm'
import Api from '../utils/api.utils'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [imageURL,setImageURL] = useState('')
  const [file,setFile] = useState(null)
  const handleChangeImg = (e) =>{
    const fileObject = e.target.files[0]
    setFile(fileObject)
    if(file){
    const imageURL = URL.createObjectURL(fileObject)
    setImageURL(imageURL)
    }else{
        setImageURL('')
    }
}

  const sendToLogin = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      email,
      password,
    }
    try {
      await Api.signup(newUser,file)
      sendToLogin('/login')
    } catch (error) {
      setError(error)
      console.log(error)
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
      <UploadImageForm imageURL={imageURL} handleChangeImg={handleChangeImg} />
        <label>username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />

        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
      {error && <p> {error} </p>}
    </div>
  )
}

export default Signup
