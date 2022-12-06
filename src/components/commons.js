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
  display: flex;
  flex-direction: wrap;
  align-items: center;
  border: 2px dotted royalblue;
  border-radius: 8%;
  padding: 18px;
  margin: 13px;
  width: 80%;
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
export const SubTitle = styled.h1`
  display: flex;
  flex-direction: row;
  font-family: optima;
  font-weight: light;
  font-size: 2.7em;
  justify-content: center;
  align-items: right;
  border: 3px solid midnightblue;
  border-radius: 26%;
  padding: 40px;
  margin: 20 80 20 20px;
  color: cornflowerblue;
  background-color: cornsilk;
  width: 90%;
`
export const ChallengeTitle = styled.h2`
  font-family: verdana;
  font-weight: normal;
  font-size: 1.8em;
  justify-content: left;
  align-items: right;
  padding: 5px;
  color: darkblue;
`
export const ChallengeDescription = styled.p`
  font-family: verdana;
  font-weight: light;
  font-size: 1em;
  padding: 8px;
  margin: 5px;
  justtify-content: center;
  align-items: center;
  color: lightsteelblue;
`
export const ChallengeDuration = styled.b`
  font-family: optima;
  font-size: 1em;
  padding: 10px;
  margin: 8px;
  justify-content: center;
  color: darkblue;
`
export const ChallengeRecommendation = styled.b`
  font-family: verdana;
  font-size: 1.2em;
  padding: 2px;
  margin: 1px;
  justify-content: center;
  color: sandybrown;
`
export const ChallengeRec = styled.p`
  font-family: verdana;
  font-size: 1em;
  padding: 1px;
  margin: 1px;
  justify-content: center;
  color: sandybrown;
`
export const ImageProfile = styled.img`
  width:50px;
  height:50px;
  border-radius:50px;
`
export const FormHabit = styled.form`
  background-color: bisque;
  padding:20px;
  width: 30%;
  position: fixed;
  bottom:0;
  right:0;
`
export const HabitsCard = styled.div`
 display:flex;
 flex-wrap:wrap
`
export const HabitCard = styled.div`
  border: 5px dotted royalblue;
  border-radius: 26%;
  margin: 30px 10px;
  padding:8px;
  width:45%;
`
export const HabitTitle = styled.h2`
  color: darkblue;
  font-family: verdana;
  font-weight: normal;
  font-size: 2.7em;
`
export const Habits = styled.div`
  width: 90%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin-left: 5%;
`
export const User = styled.div`
`
export const UserCard = styled.div`
  
`
