import React from 'react'
import NavBar from '../components/NavBar'
import { PositionContainer, Title } from '../components/commons'

export const Home = () => {
  return (
    <PositionContainer>
      <NavBar />
      <Title> Welcome to the Dopamine Habit </Title>
      {/* <Button to="/signup"> Sign Up </Button>
      <Button to="/login"> Log In </Button> */}
    </PositionContainer>
  )
}
