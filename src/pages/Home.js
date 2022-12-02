import React from 'react'
import { Button, Title } from '../components/commons'

export const Home = () => {
  return (
    <div>
      <Title> Welcome to the Dopamine Habit </Title>
      <Button to="/signup"> Sign Up </Button>
      <Button to="/login"> Log In </Button>
    </div>
  )
}
