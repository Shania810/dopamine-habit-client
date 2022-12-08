import React, { useEffect, useState } from "react";
import Habit from "../components/Habit";
import { NewHabit } from "../components/NewHabit";
import { Button, PositionContainer, RealButton, SubTitle } from "../components/commons";
import Api from "../utils/api.utils";
import { UserProfile } from "../components/UserProfile";
export const MyHabits = () => {
  const [habits, setHabits] = useState([]);
  const [value, setValue] = useState(false);
  const getHabit = async () => {
    try {
      const data = await Api.getHabits();
      setHabits(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHabit();
  }, []);
  const addAnalysis = async()=>{
    try {
        await Api.postAnalysis()
        await Api.putAnalysisHabits(habits)
    } catch (error) {
      throw error
    }
  }
  return(
    <PositionContainer>
      <UserProfile />
      <SubTitle>My Habits</SubTitle>
      <Button to="/analysis" onClick={addAnalysis} >Create Analysis</Button>
      <Habit habits={habits} getHabit={getHabit} />
      <RealButton onClick={() => setValue(!value)}>+</RealButton>
      {value && <NewHabit getHabit={getHabit} />}
    </PositionContainer>
  ) 
};
