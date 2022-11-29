import React, { useState } from 'react'
import Api from '../utils/api.utils'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newLogin = {
      username,
      password,
    }
    try {
      await Api.login(newLogin)
    } catch (error) {
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
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
