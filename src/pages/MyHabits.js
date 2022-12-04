import React, { useState } from 'react'
import Habit from '../components/Habit'
import { NewHabit } from '../components/NewHabit'
import { SubTitle } from '../components/commons'
import Api from '../utils/api.utils'

export const MyHabits = () => {
  const [habits, setHabits] = useState([])
  const getHabit = async () => {
    try {
      const data = await Api.getHabits()
      setHabits(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <SubTitle>My Habits</SubTitle>
      <NewHabit getHabit={getHabit} />
      <Habit getHabit={getHabit} habits={habits} />
    </div>
  )
}
