import React from 'react'
import { Anchor, Nav, NavButton } from './commons.js'

export const NavBar = () => {
  return (
    <Nav>
      <Anchor to="/"> Home </Anchor>
      <NavButton to="/habit"> My Habits </NavButton>
      <NavButton to="/challenge"> Challenges </NavButton>
    </Nav>
  )
}
