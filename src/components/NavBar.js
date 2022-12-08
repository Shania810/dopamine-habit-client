import React from 'react'
import { Anchor, ImageLogo, Nav, NavButton } from './commons.js'
import imageLogo from '../images/dopamine.png'

export const NavBar = () => {
  return (
    <Nav>
      <Anchor to="/"><ImageLogo src={imageLogo} /></Anchor>
      <NavButton to="/habit"> My Habits </NavButton>
      <NavButton to="/challenge"> Challenges </NavButton>
      <NavButton to="/analysis"> My Weekly Analysis </NavButton>
    </Nav>
  )
}
