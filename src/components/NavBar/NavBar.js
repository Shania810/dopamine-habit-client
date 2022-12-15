import React from "react";
import { Anchor } from "../commons";
// import imageLogo from '../images/dopamine.png'
import { StyledNavBar, NavItemLink } from "./style";

// export const NavBar = () => {
//   return (
//     <Nav>
//       <Anchor to="/"><ImageLogo src={imageLogo} /></Anchor>
//       <NavButton to="/habit"> My Habits </NavButton>
//       <NavButton to="/challenge"> Challenges </NavButton>
//       <NavButton to="/analysis"> My Weekly Analysis </NavButton>
//     </Nav>
//   )
// }

const NavBar = ({ children }) => {
  return (
    <StyledNavBar>
      <Anchor to="/">{/* <ImageLogo src={imageLogo} /> */}</Anchor>
      <NavItemLink to="/login" fill>
        Log In
      </NavItemLink>
      <NavItemLink to="/signup" fill>
        Sign Up
      </NavItemLink>
      <NavItemLink to="/habit"> My Habits </NavItemLink>
      <NavItemLink to="/challenge">Challenges</NavItemLink>
      <NavItemLink to="/analysis"> My Weekly Analysis </NavItemLink>
    </StyledNavBar>
  );
};

export default NavBar;
