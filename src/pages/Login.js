import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api.utils'
import {PositionContainer} from '../components/commons'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const sendToHabits = useNavigate()
  const userNotFound = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newLogin = {
      username,
      password,
    }
    try {
      await Api.login(newLogin)
      sendToHabits('/challenge')
    } catch (error) {
      setError(error)
      console.log(error)
    }
  }

  return (
    <PositionContainer>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label>username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
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
      {error === 'User not found' ? userNotFound('/signup') : <p>{error}</p>}
    </PositionContainer>
  )
}

export default Login
