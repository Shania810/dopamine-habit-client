import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: lavender;
  float: left;
  display: flex;
  align-items: center;
  height: 800px;
  width: 140px;
  margin: 2px;
`
export const NavButton = styled(Link)`
  text-decoration: none;
  padding: 3px;
  margin: 5px;
  border-radius: 15%;
  border: 0.5 solid black;
  color: gray;
  background-color: white;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  color: gray;
`
