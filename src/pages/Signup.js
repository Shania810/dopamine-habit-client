import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupForm, SignupInput } from '../components/commons'
import Api from '../utils/api.utils'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const sendToLogin = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      email,
      password,
    }
    try {
      await Api.signup(newUser)
      sendToLogin('/login')
    } catch (error) {
      setError(error)
      console.log(error)
    }
  }

  return (
    <div>
      <SignupForm
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label>username</label>
        <SignupInput
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
      </SignupForm>
      {error && <p> {error} </p>}
    </div>
  )
}

export default Signup
