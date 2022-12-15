import React from "react";
import {
  ImageLogo,
  PositionContainer,
  SubTitle,
  Title,
} from "../components/commons";
import imageLogo from "../components/images/dopamine.png";
import { PageHeader } from "./style";
export const Home = () => {
  return (
    <PositionContainer>
      <SubTitle>
        Welcome To
        <br></br>
        <ImageLogo src={imageLogo} />
      </SubTitle>
      <PageHeader to="/signup">
        <Title>The Dopamine Habit</Title>
      </PageHeader>
      {/* <Button to="/signup"> Sign Up </Button>
      <Button to="/login"> Log In </Button> */}
    </PositionContainer>
  );
};
