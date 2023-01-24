import React, { useEffect, useState } from "react";
import { StyledNavBar, NavItemLink } from "./style";

const NavBar = () => {
  const token = localStorage.getItem('token')
  const [user, setUser] = useState(false)
  const logOut = () => {
    localStorage.clear()
    setUser(false)
  }

  useEffect(() => {
    const login = () => {
      if (token) {
        setUser(token)
      } else {
        setUser(false)
      }
    }
    login()
  }, [token])

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
          </span> : <span><NavItemLink onClick={logOut} >
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
