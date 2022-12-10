import React, { useEffect, useState } from 'react'
import Habit from '../components/Habit'
import { NewHabit } from '../components/NewHabit'
import {Loading} from '../components/Loading'
import {
  Button,
  PositionContainer,
  RealButton,
  SubTitle,
} from '../components/commons'
import Api from '../utils/api.utils'
import { UserProfile } from '../components/UserProfile'

export const MyHabits = () => {
  const [habits, setHabits] = useState([])
  const [value, setValue] = useState(false)
  const getHabit = async () => {
    try {
      const data = await Api.getHabits()
      setHabits(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getHabit()
    runAnalysis()
  }, [])
  const addAnalysis = async () => {
    try {
      await Api.postAnalysis()
      const data = await Api.putAnalysisHabits(habits)
      console.log(data)
    } catch (error) {
      throw error
    }
  }

const [analysis,setAnalysis] = useState({})
const runAnalysis = async () => {
  try {
    const data = await Api.getAnalysis()
    setAnalysis(data)
  } catch (error) {
    console.log(error)
  }
}
  return habits.length === 0 ? <Loading/> :
    <PositionContainer>
      <UserProfile />
      <SubTitle>My Habits</SubTitle>
      {Object.keys(analysis).length === 0 ? <Button to="/analysis" onClick={addAnalysis}>
        Create Analysis
      </Button>: <Button to="/analysis">
        Check Analysis
      </Button>}
      <Habit habits={habits} getHabit={getHabit} />
      <RealButton onClick={() => setValue(!value)}>+</RealButton>
      {value && <NewHabit getHabit={getHabit} />}
    </PositionContainer>
}
