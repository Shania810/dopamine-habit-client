import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Api from "../utils/api.utils";
import { EntryPage, PageHeader } from "./style";
import Button from "../components/Button";
import { ImageLogo1 } from "../components/commons";
import imageLogo from "../components/images/dopamine.png";

// import {PositionContainer} from '../components/commons'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const sendToHabits = useNavigate();
  const userNotFound = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLogin = {
      username,
      password,
    };
    try {
      await Api.login(newLogin);
      sendToHabits("/challenge");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <EntryPage>
      <PageHeader to="/">
        <ImageLogo1 src={imageLogo} />
      </PageHeader>
      <EntryCard>
        <h2> Log In </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <InputGroup>
            <label>username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup>
            <label>password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputGroup>
          <Button type="submit" full>
            Log In
          </Button>
        </form>
        <span>
          Don't have an account yet?
          <Link to="/signup"> Sign Up</Link>
          {error === "User not found" ? (
            userNotFound("/signup")
          ) : (
            <p>{error}</p>
          )}
        </span>
      </EntryCard>
    </EntryPage>
  );
};

export default Login;
