import React from 'react'
import { Button } from '../components/commons'

export const Home = () => {
  return (
    <div>
      <h1>Welcome to the Dopamine Habit</h1>
      <Button to="/signup"> Sign Up </Button>
      <Button to="/login"> Log In </Button>
    </div>
  )
}
