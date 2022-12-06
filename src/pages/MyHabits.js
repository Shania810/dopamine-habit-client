import React, { useEffect, useState } from 'react'
import Habit from '../components/Habit'
import { NewHabit } from '../components/NewHabit'
import { Habits, RealButton, SubTitle } from '../components/commons'
import Api from '../utils/api.utils'
import { UserProfile } from '../components/UserProfile'
export const MyHabits = () => {
  const [habits, setHabits] = useState([])
  const [value,setValue] = useState(false)
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
    <Habits>
      <SubTitle>My Habits</SubTitle>
      <Habit habits={habits} getHabit={getHabit} />
      <RealButton onClick={()=> setValue(!value)} >+</RealButton>
      {value && <NewHabit getHabit={getHabit} />}
    </Habits>
    </div>
  )
}
