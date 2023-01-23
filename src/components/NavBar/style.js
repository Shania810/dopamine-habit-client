import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 20px;
  background-color: #202023;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export const NavItemLink = styled(Link)`
  color:${props => props.fill === 'false'  ? 'white' : 'blue'};
  margin-left: 16px;
  padding-bottom: 6px;
`
