import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../components/Button'
import { ImageLogo1 } from '../components/commons'
import EntryCard from '../components/EntryCard'
import Input from '../components/Input'
import InputGroup from '../components/InputGroup'
import Api from '../utils/api.utils'
import { EntryPage, PageHeader } from './style'
import imageLogo from '../components/images/dopamine.png'

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
    <EntryPage>
      <PageHeader to="/">
        <ImageLogo1 src={imageLogo} />
      </PageHeader>
      <EntryCard>
        <h2> Sign Up </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <InputGroup>
            <label htmlFor="signup-username"> username </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </InputGroup>
          <InputGroup>
            <label>email</label>
            <Input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </InputGroup>
          <InputGroup>
            <label>password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </InputGroup>
          <Button type="submit" full>
            Sign Up
          </Button>
        </form>
        <span>
          Already have an account?
          <Link to="/login"> Log In </Link>
          {error && <p> {error} </p>}
        </span>
      </EntryCard>
    </EntryPage>
  )
}

export default Signup
