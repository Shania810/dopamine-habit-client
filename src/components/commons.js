import { Link } from "react-router-dom";
import styled from "styled-components";

// export const Nav = styled.nav`
//   background-color: bisque;
//   float: left;
//   left:0;
//   top:0;
//   position:fixed;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100vh;
//   width: 140px;
//   margin: 2px;
// `
// export const NavButton = styled(Link)`
//   text-decoration: none;
//   font-family: optima;
//   border: 0.5px solid midnightblue;
//   padding: 12px;
//   margin: 13px;
//   border-radius: 15%;
//   color: cornflowerblue;
//   background-color: cornsilk;
// `
export const Anchor = styled(Link)`
  text-decoration: none;
  padding: 6px;
  margin-top: 11px;
  color: #0072ff;
`;
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
`;
export const ButtonFinish = styled.button`
  background-color: green;
  width: 200px;
  height: 50px;
  border: solid green;
  border-radius: 50px;
  color: white;
  font-family: cursive;
  font-size: 20px;
`;
export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  font-family: Ubuntu;
  font-weight: light;
  font-size: 2em;
  justify-content: left;
  align-items: right;
  border: 2px solid black;
  border-radius: 4%;
  padding: 50px;
  margin: 20 80 20 20px;
  color: #2f8bfd;
  background-color: #ffffff;
  box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5);
  margin-top: 30px;
  letter-spacing: 3.5px;
`;
// export const SignupForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// export const SignupInput = styled.input`
//   height: 30px;
//   width: 250px;
//   border: 2px solid midnightblue;
//   border-radius: 10%;
//   background-color: blanchealmond;
//   padding: 5px;
//   margin: 10px;
//   color: ${(props) => props.type || 'cornflowerblue'};
// `

export const Card = styled.div`
  display: flex;
  flex-direction: wrap;
  align-items: center;
  border: 2px dotted royalblue;
  border-radius: 8%;
  padding: 18px;
  margin: 13px;
  width: 80%;
`;
export const RealButton = styled.button`
  text-decoration: none;
  font-size: 1em;
  font-family: optima;
  color: #888888;
  background-color: ;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 12%;
`;
export const SubTitle = styled.h1`
  font-family: optima;
  font-weight: light;
  font-size: 2.7em;
  border: 3px solid midnightblue;
  border-radius: 26%;
  padding: 40px;
  color: cornflowerblue;
  background-color: cornsilk;
  width: 80%;
`;
/*export const SubTitle = styled.h1`
  font-size: 60px;
  border: 3px solid black;
  color:white;
  background-color:black;
  width: 40%;
  padding: 50px;
  border: 1px solid white;
  border-radius: 50px;
  font-weight: 10;
`*/
export const ChallengeTitle = styled.h2`
  font-family: verdana;
  font-weight: normal;
  font-size: 1.8em;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #0072ff;
`;
export const ChallengeDescription = styled.p`
  font-family: verdana;
  font-weight: light;
  font-size: 1em;
  padding: 8px;
  margin: 5px;
  justtify-content: center;
  align-items: center;
  color: lightsteelblue;
`;
export const ChallengeDuration = styled.b`
  font-family: optima;
  font-size: 1em;
  padding: 10px;
  margin: 8px;
  justify-content: center;
  color: #0072ff;
`;
export const ChallengeRecommendation = styled.b`
  font-family: verdana;
  font-size: 1.2em;
  padding: 2px;
  margin: 1px;
  justify-content: center;
  color: gray;
`;
export const ChallengeRec = styled.p`
  font-family: verdana;
  font-size: 1em;
  padding: 1px;
  margin: 1px;
  justify-content: center;
  color: lightgray;
`;
export const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const FormHabit = styled.form`
  background-color: black;
  padding: 20px;
  width: 30%;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 50px;
`;
export const Label = styled.label`
  color: white;
  font-size: 20px;
`;
export const Input = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 50px;
  margin: 10px;
  font-size: cursive;
`;
export const HabitsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px;
  width: 100%;
`;
export const HabitCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  padding: 50px 20px;
  margin: 5px;
  font-size: 30px;
  border-radius: 30px;
`;
export const HabitTitle = styled.h2`
  color: white;
`;
export const Habits = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-right: 300px;
  border: 1px solid black;
  padding: 50px;
`;
export const HabitDescription = styled.div`
  color: white;
`;
export const User = styled.div``;
export const UserCard = styled.div``;
export const LoadingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
export const PositionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;
export const ImageLogo = styled.img`
  width: 40%;
`;
export const ImageLogo1 = styled.img`
  width: 10%;
`;
export const Checklist = styled.div`
  color: green;
  font-size: 40px;
`;
export const NoCheckList = styled.div`
  color: red;
  font-size: 50px;
`;
export const ButtonDefault = styled.button`
  margin-top: 30px;
  background: black;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  color: white;
  font-family: cursive;
  font-size: 20px;
  border-radius: 50px;
`;
export const ButtonDelete = styled.div`
  font-size: 30px;
  color: white;
  margin-top: 10px;
`;
