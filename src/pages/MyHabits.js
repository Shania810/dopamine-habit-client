import React, { useEffect, useState } from 'react'
import Habit from '../components/Habit'
import { NewHabit } from '../components/NewHabit'
import { SubTitle } from '../components/commons'
import Api from '../utils/api.utils'
import { UserProfile } from '../components/UserProfile'
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
  useEffect(()=>{
    getHabit()
  },[])
  return (
    <div>
    <UserProfile/>
      <SubTitle>My Habits</SubTitle>
      <NewHabit getHabit={getHabit} />
      <Habit habits={habits} getHabit={getHabit} />
    </div>
  )
}
