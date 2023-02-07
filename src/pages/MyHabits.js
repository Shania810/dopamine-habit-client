import React, { useEffect, useState } from "react";
import Habit from "../components/Habit";
import { NewHabit } from "../components/NewHabit";
import {
  ButtonDefault,
  PositionContainer,
  SubTitle,
} from "../components/commons";
import Api from "../utils/api.utils";
import { DailyHabit } from "../components/DailyHabit";
import { BsFillBarChartFill } from "react-icons/bs";
import {Loading} from "../components/Loading";

export const MyHabits = () => {
  const [habits, setHabits] = useState(null);
  const [value, setValue] = useState(false);
  const [analyses, setAnalyses] = useState([]);
  let [showComponentDaily, setShowComponentDaily] = useState(false);

  const getHabit = async () => {
    try {
      const data = await Api.getHabits();
      setHabits(data);
    } catch (error) {
      console.log(error);
    }
  };
  const runAnalysis = async () => {
    try {
      const data = await Api.getAnalysis();
      setAnalyses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHabit();
    runAnalysis();
  },[]);

  const addAnalysis = async () => {
    try {
      const analysis = await Api.postAnalysis();
      await Api.putAnalysisHabits(analysis, habits);
      runAnalysis();
    } catch (error) {
      console.log(error);
    }
  };
  
  const updateAnalysis = async () => {
    try {
      await Api.putAnalysis(analyses, {
        updatedAt: new Date()
      });
      await Api.putHabitsCompleted();
      runAnalysis();
      setShowComponentDaily(false);
    } catch (error) {
      console.log(error);
    }
  };
  const showButtonAddDeleteHabitAndAddAnalysis = () => {
    let show = null;
    if (analyses.length === 0) {
      show = true;
    } else {
      if (analyses[analyses.length - 1]?.duration >= 7) {
        show = true;
      } else {
        show = false;
      }
    }
    return show;
  };
  useEffect(() => {
    getHabit();
  },[]);

  useEffect(() => {
    const showDaily = () => {
      let show = null;
      if (analyses.length === 0) {
        show = false;
      } else {
        const updatedLast = new Date(analyses[analyses.length - 1]?.updatedAt);
        const date = updatedLast.getDate();
        const now = new Date();
        if (date !== now.getDate()) {
          show = true;
        } else {
          show = false;
        }
      }
      return show;
    };
    const show = showDaily();
    setShowComponentDaily(show);
  },[analyses]);

  return habits ? <PositionContainer style={{ margin: "50px 0" }}>
      <SubTitle style={{ width: 400 }}>My Goals</SubTitle>
      {showButtonAddDeleteHabitAndAddAnalysis() ? (
        <ButtonDefault onClick={addAnalysis}>
          Analyze me <BsFillBarChartFill />
        </ButtonDefault>
      ) : analyses[analyses.length - 1]?.duration ? (
        <h1>
          You have completed only {analyses[analyses.length - 1]?.duration}
          {analyses[analyses.length - 1]?.duration <= 1 ? " day" : " days"}
        </h1>
      ) : (
        <h1>You can do anything!</h1>
      )}
        <Habit
          habits={habits}
          getHabit={getHabit}
          condition={showButtonAddDeleteHabitAndAddAnalysis}
        />
      {showButtonAddDeleteHabitAndAddAnalysis() && (
        <ButtonDefault onClick={() => setValue(!value)}>Add Goal</ButtonDefault>
      )}
      {value && <NewHabit getHabit={getHabit} />}
      {showComponentDaily && (
        <DailyHabit
          habits={habits}
          getHabit={getHabit}
          updateAnalysis={updateAnalysis}
        />
      )}
    </PositionContainer>:<Loading/>
  ;
};
