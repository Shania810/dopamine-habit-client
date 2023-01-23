import React from "react";
import { StyledNavBar, NavItemLink } from "./style";

const NavBar = () => {
  const user = localStorage.getItem('token')
  return (
    <StyledNavBar>
      <NavItemLink>Dopamine Habit</NavItemLink>
      <div>
        {!user ?
          <span>
            <NavItemLink to="/login">
              Log In
            </NavItemLink>
            <NavItemLink to="/signup">
              Sign Up
            </NavItemLink>
          </span> : <span><NavItemLink>
            Logout
          </NavItemLink></span>}
        <NavItemLink to="/habit"> My Habits </NavItemLink>
        <NavItemLink to="/challenge">Challenges</NavItemLink>
        <NavItemLink to="/analysis"> My Weekly Analysis </NavItemLink>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
