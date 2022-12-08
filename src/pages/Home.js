import React from 'react'
import { Button, PositionContainer, Title } from '../components/commons'

export const Home = () => {
  return (
    <PositionContainer>
      <Title> Welcome to the Dopamine Habit </Title>
      <Button to="/signup"> Sign Up </Button>
      <Button to="/login"> Log In </Button>
    </PositionContainer>
  )
}
