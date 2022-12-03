import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: bisque;
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
  font-family: optima;
  border: 0.5px solid midnightblue;
  padding: 12px;
  margin: 13px;
  border-radius: 15%;
  color: cornflowerblue;
  background-color: cornsilk;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  padding: 6px;
  margin-top: 11px;
  color: midnightblue;
`
export const Button = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  font-family: optima;
  color: midnightblue;
  background-color: lightsteelblue;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid royalblue;
  border-radius: 12%;
`
export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  font-family: optima;
  font-weight: light;
  font-size: 3em;
  justify-content: center;
  align-items: right;
  border: 7px solid bisque;
  border-radius: 26%;
  padding: 70px;
  margin: 20 80 20 20px;
  color: midnightblue;
  background-color: blanchealmond;
`

export const ImageProfile = styled.img`
  width: 100px;
  height: 100px;
`

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignupInput = styled.input`
  height: 30px;
  width: 250px;
  border: 2px solid midnightblue;
  border-radius: 10%;
  background-color: blanchealmond;
  padding: 5px;
  margin: 10px;
  color: ${(props) => props.type || 'cornflowerblue'};
`

export const Card = styled.div`
  border: 1px solid black;
  width: 40%;
`
export const RealButton = styled.button`
  text-decoration: none;
  font-size: 1em;
  font-family: optima;
  color: midnightblue;
  background-color: lightsteelblue;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid royalblue;
  border-radius: 12%;
`
