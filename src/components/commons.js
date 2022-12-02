import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: lavender;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 140px;
  margin: 2px;
`
export const NavButton = styled(Link)`
  text-decoration: none;
  padding: 3px;
  margin: 5px;
  border: 0.5 solid black;
  border-radius: 15%;
  color: gray;
  background-color: white;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  color: gray;
`
export const Button = styled(Link)`
  text-decoration: none;
  padding: 5px;
  margin: 10px;
  border: 2 dotted white;
  color: white;
  background-color: black;
  border-radius: 18%;
`
